const { createTicket } = require("../../repositories/ticket.repository");

const createTicketService = async (payload) => {
  const ticket = await createTicket(payload);
  // realtime
  return ticket;
};

module.exports = createTicketService;
