const createTikcetController = require("./createTikcet.controller");
const getTicketsController = require("./getTickets.controller");
const getTicketByIdController = require("./getTicketById.controller");
const markTicketViewedController = require("./markTicketViewed.controller");
const updateTicketStatusController = require("./updateTicketStatusController");

module.exports = {
  createTikcetController,
  getTicketsController,
  getTicketByIdController,
  markTicketViewedController,
  updateTicketStatusController
};
