const { getTickets } = require("../../repositories/ticket.repository");

const getTicketsService = async ({ page, userId, role }) => {
  return await getTickets({ page, userId, role });
};

module.exports = getTicketsService;
