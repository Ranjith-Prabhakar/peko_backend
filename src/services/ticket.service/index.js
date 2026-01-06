const createTicketService = require("./createTicket.service");
const getTicketsService = require("./getTickets.service");
const getTicketByIdService = require("./getTicketById.service");
const markTicketViewedService = require("./markTicketViewed.service");
const updateTicketStatusService = require("./updateTicketStatusService");

module.exports = {
  createTicketService,
  getTicketsService,
  getTicketByIdService,
  markTicketViewedService,
  updateTicketStatusService
};
