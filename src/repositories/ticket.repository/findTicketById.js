const { Ticket, User, TicketCategory } = require("../../../models");

const findTicketById = async (ticketId) => {
  return await Ticket.findByPk(ticketId, {
    include: [
      { model: User, as: "user", attributes: ["id", "name"] },
      { model: TicketCategory, as: "category", attributes: ["id", "name"] }
    ]
  });
};

module.exports = findTicketById;
