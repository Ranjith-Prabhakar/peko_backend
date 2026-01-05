const { Server: IOServer } = require("socket.io");
const constants = require("./app");

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

   
    // listen messages
    socket.on("message", (msg) => {
      console.log("Received message:", msg);
      
    });

    // disconnect
    socket.on("disconnect", () => {
      console.log("Client disconnected:", socket.id);
    });
  });
}

module.exports = { io, connectSocket };
