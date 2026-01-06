const { createTicket } = require("../../repositories/ticket.repository");
const { notifyAdmins } = require("../../utils/socket");

const createTicketService = async (payload) => {
  const ticket = await createTicket(payload);

  notifyAdmins({
    type: "NEW_TICKET",
    ticketId: ticket.id,
    title: ticket.title,
    createdBy: payload.userId,
  });

  return ticket;
};


module.exports = createTicketService;
