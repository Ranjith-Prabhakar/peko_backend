const { Server: IOServer } = require("socket.io");
const constants = require("./app"); // contains allowedOrigins
const { allowedOrigins } = constants;

let io;

async function connectSocket(httpServer) {
  io = new IOServer(httpServer, {
    cors: {
      origin: allowedOrigins,
      credentials: true,
    },
  });

  io.on("connection", (socket) => {
    const id = socket.handshake.auth?.id;
    console.log("=================================");
    console.log("Connected id:", id);
    console.log("Client connected:", socket.id);

    // Listen for messages from this client
    socket.on("message", (msg) => {
      console.log("Received message from client:", msg);
    });

    // Send a welcome message to all other clients
    socket.broadcast.emit("welcome", `User ${id || socket.id} joined`);

    // Send socket ID only to this client
    socket.emit("your-id", socket.id);

    // Handle disconnect
    socket.on("disconnect", () => {
      console.log("Client disconnected:", socket.id);
      socket.broadcast.emit("user-disconnected", socket.id);
    });
  });
}

module.exports = { io, connectSocket };
