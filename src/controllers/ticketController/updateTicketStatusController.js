const { updateTicketStatusService } = require("../../services/ticket.service");

const updateTicketStatusController = async (req, res) => {
  const ticketId = req.params.id;
  const { status } = req.body;
  const role = req.user.role;

  if (role !== "admin") {
    return res.status(403).json({ success: false, message: "Admins only" });
  }

  const updatedTicket = await updateTicketStatusService(ticketId, status);

  res.status(200).json({
    success: true,
    data: updatedTicket,
    message: "Ticket status updated",
  });
};

module.exports = updateTicketStatusController;
