const { updateTicketViewStatus } = require("../../repositories/ticket.repository");

const markTicketViewedService = async ({ ticketId, role }) => {
  if (role !== "admin") {
    throw new Error("Admins only");
  }

  return await updateTicketViewStatus(ticketId);
};

module.exports = markTicketViewedService;
