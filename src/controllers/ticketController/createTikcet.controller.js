const { createTicketService } = require("../../services/ticket.service");

async function createTikcetController(req, res) {
  const { title, description, categoryId, priority } = req.body;
  console.log("req.body=========", req.body);
  const userId = req.user.id;
  console.log("userId============", userId);

  const ticket = await createTicketService({
    title,
    description,
    categoryId,
    priority,
    userId
  });

  res.status(201).json({
    success: true,
    message: "Ticket created successfully",
  });
}

module.exports = createTikcetController;
