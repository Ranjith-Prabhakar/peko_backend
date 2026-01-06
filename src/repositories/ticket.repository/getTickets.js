const { Ticket, User, TicketCategory } = require("../../../models");

const getTickets = async ({ page, userId, role }) => {
  const limit = 10;
  const offset = (page - 1) * limit;

  const where =
    role === "admin" ? {} : { userId };

  const { rows, count } = await Ticket.findAndCountAll({
    where,
    limit,
    offset,
    order: [["createdAt", "DESC"]],
    include: [
      { model: User, as: "user", attributes: ["id", "name"] },
      { model: TicketCategory, as: "category", attributes: ["id", "name"] }
    ]
  });

  return {
    data: rows,
    page,
    total: count,
    totalPages: Math.ceil(count / limit)
  };
};

module.exports = getTickets;
