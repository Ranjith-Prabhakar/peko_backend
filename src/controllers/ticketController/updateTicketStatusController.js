const { updateTicketStatusService } = require("../../services/ticket.service");

const updateTicketStatusController = async (req, res, next) => {
  try {
    const ticketId = req.params.id;
    const { status } = req.body;
    const user = req.user;

    const updatedTicket = await updateTicketStatusService(ticketId, status, user);

    res.status(200).json({
      success: true,
      data: updatedTicket,
      message: "Ticket status updated",
    });
  } catch (err) {
    next(err);
  }
};

module.exports = updateTicketStatusController;
