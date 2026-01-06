const { createTicket } = require("../../repositories/ticket.repository");
const { notifyAdminsNewTicket } = require("../../utils/socket");

const createTicketService = async (payload) => {
  const { user, ...ticketPayload } = payload;

  const ticket = await createTicket(ticketPayload);

  notifyAdminsNewTicket({
    type: "NEW_TICKET",
    ticketId: ticket.id,
    title: ticket.title,
    userId: user.id,
    createdByName: user.name,
    createdAt: new Date().toISOString(),
  });

  return ticket;
};

module.exports = createTicketService;
