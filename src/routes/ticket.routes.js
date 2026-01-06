const express = require("express");
const tryCatchHandler = require("../utils/tryCatch");
const { createTikcetController } = require("../controllers/ticketController");
const authMiddleware = require("../middlewares/authMiddleware");
const validate = require("../middlewares/genericValidator");
const { ticketSchema} = require("../validators");

function ticketRoute() {
  const router = express.Router();
  router.post(
    "/create",
    authMiddleware,
    validate(ticketSchema),
    tryCatchHandler(createTikcetController)
  );

  return router;
}

module.exports = ticketRoute;
