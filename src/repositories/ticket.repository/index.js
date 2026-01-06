const createTicket = require("./createTicket");
const getTickets = require("./getTickets");
const findTicketById = require("./findTicketById");
const updateTicketViewStatus = require("./updateTicketViewStatus");
const updateTicketStatusRepository = require("./updateTicketStatusRepository");
const findMessagesByTicketId = require("./findMessagesByTicketId");

module.exports = {
  createTicket,
  getTickets,
  findTicketById,
  updateTicketViewStatus,
  updateTicketStatusRepository,
  findMessagesByTicketId
};
