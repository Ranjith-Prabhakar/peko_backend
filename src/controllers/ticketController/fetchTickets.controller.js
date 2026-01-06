const { Ticket, User, TicketCategory } = require('../models');

async function getTicketsController(req, res) {
  try {
    const page = Number(req.query.page) || 1;
    const limit = 10;
    const offset = (page - 1) * limit;

    const where =
      req.user.role === 'admin'
        ? {}
        : { userId: req.user.id };

    const { rows, count } = await Ticket.findAndCountAll({
      where,
      limit,
      offset,
      order: [['createdAt', 'DESC']],
      include: [
        { model: User, as: 'user', attributes: ['id', 'name'] },
        { model: TicketCategory, as: 'category', attributes: ['id', 'name'] }
      ]
    });

    res.json({
      data: rows,
      page,
      total: count,
      totalPages: Math.ceil(count / limit)
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports = getTicketsController;