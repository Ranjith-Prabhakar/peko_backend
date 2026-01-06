const express = require("express");
const tryCatchHandler = require("../utils/tryCatch");
const authMiddleware = require("../middlewares/authMiddleware");
const validate = require("../middlewares/genericValidator");
const { ticketSchema} = require("../validators");
const checkTicketStatusPermission = require("../middlewares/ticketStatusPermission");


const {
  createTikcetController,
  getTicketsController,
  getTicketByIdController,
  markTicketViewedController,
  updateTicketStatusController,
  getTicketMessagesController 
} = require("../controllers/ticketController");

function ticketRoute() {
  const router = express.Router();
  router.post(
    "/create",
    authMiddleware,
    validate(ticketSchema),
    tryCatchHandler(createTikcetController)
  );
 
  router.get(
    "/",
    authMiddleware,
    tryCatchHandler(getTicketsController)
  );

  router.get(
    "/:id",
    authMiddleware,
    tryCatchHandler(getTicketByIdController)
  );

  router.patch(
    "/:id/viewed",
    authMiddleware,
    tryCatchHandler(markTicketViewedController)
  );

  router.patch(
  "/:id/status",
  authMiddleware,
  checkTicketStatusPermission,
  tryCatchHandler(updateTicketStatusController)
);

    router.get(
      "/tickets/:ticketId/messages",
      authMiddleware,
      tryCatchHandler(getTicketMessagesController)
    );
  return router;
}

module.exports = ticketRoute;
