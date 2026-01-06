require("./bootstrap/preBootstrap");
const app = require("./app");
const { PORT } = require("./config/env");
const { sequelize } = require("../models");
const { createServer } = require("http");
const { initSocket } = require("./config/socket");

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log("DB connection established successfully.");

    const httpServer = createServer(app);
    await initSocket(httpServer);

    httpServer.listen(PORT, () => {
      console.log(`Server running on http://127.0.0.1:${PORT}`);
    });
  } catch (error) {
    console.error("Server failed to start", error);
    process.exit(1);
  }
}

startServer();
