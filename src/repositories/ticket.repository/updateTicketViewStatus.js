const { Ticket } = require("../../../models");

const updateTicketViewStatus = async (ticketId) => {
  await Ticket.update(
    { isViewedByAdmin: true },
    { where: { id: ticketId } }
  );

  return await Ticket.findByPk(ticketId);
};

module.exports = updateTicketViewStatus;
