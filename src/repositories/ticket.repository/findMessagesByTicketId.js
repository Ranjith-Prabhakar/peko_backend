const { TicketMessage, User } = require("../../../models");

const findMessagesByTicketId = async (ticketId) => {
  return await TicketMessage.findAll({
    where: { ticketId },
    order: [["createdAt", "ASC"]],
    include: [
      {
        model: User,
        as: "sender",
        attributes: ["id", "name"],
      },
    ],
  });
};

module.exports = { findMessagesByTicketId };
