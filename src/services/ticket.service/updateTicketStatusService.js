const { updateTicketStatusRepository } = require("../../repositories/ticket.repository");

const updateTicketStatusService = async (ticketId, status) => {
  return await updateTicketStatusRepository(ticketId, status);
};

module.exports =  updateTicketStatusService ;
