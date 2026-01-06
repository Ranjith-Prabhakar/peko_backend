const { findTicketById } = require("../../repositories/ticket.repository");

const getTicketByIdService = async ({ ticketId, userId, role }) => {
  const ticket = await findTicketById(ticketId);

  if (!ticket) {
    throw new Error("Ticket not found");
  }

  if (role !== "admin" && ticket.userId !== userId) {
    throw new Error("Access denied");
  }

  return ticket;
};

module.exports = getTicketByIdService;
