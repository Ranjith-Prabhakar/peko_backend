const { getTicketMessagesService } = require("../../services/ticket.service");

const getTicketMessagesController = async (req, res) => {
  const { ticketId } = req.params;
  const user = req.user;

  const messages = await getTicketMessagesService({
    ticketId,
    user,
  });

  res.status(200).json({
    success: true,
    data: messages,
  });
};

module.exports = getTicketMessagesController;
