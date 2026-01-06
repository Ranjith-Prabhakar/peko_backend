const { Ticket } = require("../../../models");

const updateTicketStatusRepository = async (ticketId, status) => {
  await Ticket.update(
    { status },
    { where: { id: ticketId } }
  );

  return await Ticket.findByPk(ticketId);
};

module.exports = updateTicketStatusRepository ;
