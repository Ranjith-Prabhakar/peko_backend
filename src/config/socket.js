const { Server } = require("socket.io");
const redis = require("../config/redis");
const { verifyToken } = require("../utils/token");
const { JWT_ACCESS_SECRET } = require("../config/env");

let io;

function initSocket(server) {
  io = new Server(server, {
    cors: {
      origin: process.env.CLIENT_URL,
      credentials: true
    }
  });

  // 🔐 Authenticate socket using ACCESS token
  io.use((socket, next) => {
    try {
      const token = socket.handshake.auth?.token;
      if (!token) throw new Error("Token missing");

      const payload = verifyToken(token, JWT_ACCESS_SECRET);

      socket.userId = payload.userId;
      socket.role = payload.role;

      next();
    } catch (err) {
      next(new Error("Unauthorized"));
    }
  });

  io.on("connection", async (socket) => {
    const { userId, role } = socket;

    console.log(`User ${userId} (${role}) connected → ${socket.id}`);

    // ✅ Store socketId in Redis
    await redis.sadd(`user:sockets:${userId}`, socket.id);

    // ✅ User room
    socket.join(`user:${userId}`);

    // ✅ Role room
    socket.join(`role:${role}`);

    socket.emit("welcome", "Socket connected");

    socket.on("disconnect", async () => {
      console.log(`User ${userId} disconnected → ${socket.id}`);
      await redis.srem(`user:sockets:${userId}`, socket.id);
    });
  });

  return io;
}

function getIO() {
  if (!io) throw new Error("Socket.io not initialized");
  return io;
}

module.exports = { initSocket, getIO };
