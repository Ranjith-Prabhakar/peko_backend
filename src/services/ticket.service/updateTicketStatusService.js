const { updateTicketStatusRepository, findTicketById } = require("../../repositories/ticket.repository");
const {
  notifyAdminsStatusChange,
  notifyUserStatusChange,
} = require("../../utils/socket");

const updateTicketStatusService = async (ticketId, status, user) => {
  const updatedTicket = await updateTicketStatusRepository(ticketId, status);

  const ticket = await findTicketById(ticketId);
  if (!ticket) throw new Error("Ticket not found");

  const payload = {
    type: "STATUS_UPDATE",
    ticketId: ticket.id,
    title: ticket.title,
    status: updatedTicket.status,
    createdByName: user.name,
    createdAt: new Date().toISOString(),
  };

  if (user.role === "admin") {
    notifyUserStatusChange(ticket.userId, ticket.id, payload);
  } else {
    notifyAdminsStatusChange(ticket.id, payload);
  }

  return updatedTicket;
};

module.exports = updateTicketStatusService;
