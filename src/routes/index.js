const express = require("express");

const authRoute = require("./auth.routes");
const categoryRoute = require("./category.routes");
const ticketRoute = require("./ticket.routes");

function routes() {
  const router = express.Router();

  router.use("/auth", authRoute());
  router.use("/category", categoryRoute());
  router.use("/ticket", ticketRoute());

  return router;
}

module.exports = routes;
