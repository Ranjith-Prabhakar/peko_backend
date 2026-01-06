const ApiError = require("../../utils/ApiError");
const { findTicketById } = require("../../repositories/ticket.repository");
const { findMessagesByTicketId } = require("../../repositories/ticket.repository");

const getTicketMessagesService = async ({ ticketId, user }) => {
  const ticket = await findTicketById(ticketId);

  if (!ticket) {
    throw new ApiError(404, "Ticket not found");
  }

  if (user.role !== "admin" && ticket.userId !== user.id) {
    throw new ApiError(403, "You are not allowed to view this ticket");
  }

  return await findMessagesByTicketId(ticketId);
};

module.exports =  getTicketMessagesService ;
