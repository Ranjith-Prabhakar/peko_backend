const createTicket = require("./createTicket");
const getTickets = require("./getTickets");
const findTicketById = require("./findTicketById");
const updateTicketViewStatus = require("./updateTicketViewStatus");
const updateTicketStatusRepository = require("./updateTicketStatusRepository");

module.exports = {
  createTicket,
  getTickets,
  findTicketById,
  updateTicketViewStatus,
  updateTicketStatusRepository
};
