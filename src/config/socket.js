const socketIO = require("socket.io");
const redis = require("../config/redis");
const { verifyToken } = require("../utils/token");
const { JWT_ACCESS_SECRET } = require("../config/env");
const { allowedOrigins } = require("../config/app");
const { registerChatSocket } = require("../sockets/chat.socket");

let io;

function initSocket(httpServer) {
  io = new socketIO.Server(httpServer, {
    cors: {
      origin: allowedOrigins,
      credentials: true
    }
  });

  io.engine.on("connection_error", (err) => {
    console.error("Socket engine error:", err.message);
  });

  io.use((socket, next) => {
    try {
      console.log("Socket handshake attempt");

      const token = socket.handshake.auth?.token;
      console.log("token",token)
      if (!token) throw new Error("Token missing");

      const payload = verifyToken(token, JWT_ACCESS_SECRET);

      socket.userId = payload.userId;
      socket.role = payload.role;

      console.log(
        `Auth success → user:${payload.userId}, role:${payload.role}`
      );

      next();
    } catch (err) {
      console.error("Socket auth failed:", err.message);
      next(new Error("Unauthorized"));
    }
  });

  io.on("connection", async (socket) => {
    const { userId, role } = socket;

    console.log(
      ` connected user:${userId} role:${role} socket:${socket.id}`
    );

    await redis.sadd(`user:sockets:${userId}`, socket.id);

    socket.join(`user:${userId}`);
    socket.join(`role:${role}`);

    registerChatSocket(io, socket);
    socket.emit("welcome", "Socket connected");

    socket.on("disconnect", async () => {
      console.log(
        `disconnected user:${userId} socket:${socket.id}`
      );
      await redis.srem(`user:sockets:${userId}`, socket.id);
    });
  });

  return io;
}

function getIO() {
  if (!io) {
    throw new Error("Socket.io not initialized");
  }
  return io;
}

module.exports = { initSocket, getIO };
