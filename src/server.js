require("./bootstrap/preBootstrap");
const app = require("./app");
const { PORT } = require("./config/env");
const { sequelize } = require("../models");
const { createServer }=require("http");
const { connectSocket }=require("./config/socket");

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log("db connection has been established successfully.");
     const httpServer = createServer(app);
     await connectSocket(httpServer);
    httpServer.listen(PORT, () => {
      console.log(`server running on http://127.0.0.1:${PORT}`);
    });
  } catch (error) {
    console.error("server failed to start", error);
    process.exit(1);
  }
}

startServer();
