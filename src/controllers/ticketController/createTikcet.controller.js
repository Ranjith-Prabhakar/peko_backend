const { createTicketService } = require("../../services/ticket.service");

async function createTikcetController(req, res) {
  const { title, description, categoryId, priority } = req.body;
  const userId = req.user.id;

  const ticket = await createTicketService({
    title,
    description,
    categoryId,
    priority,
    userId,
    user: req.user
  });

  res.status(201).json({
    success: true,
    message: "Ticket created successfully",
  });
}

module.exports = createTikcetController;
