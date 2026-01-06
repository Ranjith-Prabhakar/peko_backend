const express = require("express");

const authRoute = require("./auth.routes");
const categoryRoute = require("./category.routes");

function routes() {
  const router = express.Router();

  router.use("/auth", authRoute());
  router.use("/category", categoryRoute());

  return router;
}

module.exports = routes;
