const { getTicketByIdService } = require("../../services/ticket.service");

async function getTicketByIdController(req, res) {
  const ticketId = req.params.id;
  const userId = req.user.id;
  const role = req.user.role;

  const ticket = await getTicketByIdService({
    ticketId,
    userId,
    role
  });

  res.status(200).json({
    success: true,
    data: ticket
  });
}

module.exports = getTicketByIdController;
