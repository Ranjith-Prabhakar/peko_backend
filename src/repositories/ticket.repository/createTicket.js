const { Ticket } = require("../../../models");

const createTicket = async ({
  title,
  description,
  categoryId,
  priority,
  userId
}) => {
  return await Ticket.create({
    title,
    description,
    categoryId,
    priority,
    userId,
    status: "open",
    isViewedByAdmin: false
  });
};

module.exports = createTicket