const { markTicketViewedService } = require("../../services/ticket.service");

async function markTicketViewedController(req, res) {
  const ticketId = req.params.id;
  const role = req.user.role;

  const updatedTicket = await markTicketViewedService({ ticketId, role });

  res.status(200).json({
    success: true,
    data: updatedTicket,
    message: "Ticket marked as viewed",
  });
}

module.exports = markTicketViewedController;
