const { TicketMessage } = require("../../models");
const { notifyAdminsMessage, notifyUserMessage } = require("../utils/socket");

function registerChatSocket(io, socket) {
  socket.on(
    "message-to-server-from-client-to-peer",
    async ({ toAddress, message }) => {
      try {
        const { ticketId, senderId, senderName, message: text } = message;

        const savedMessage = await TicketMessage.create({
          ticketId,
          senderId,
          senderRole: socket.role,
          message: text,
        });

        const payload = {
          id: savedMessage.id,
          ticketId,
          senderId,
          senderName,
          senderRole: socket.role,
          message: text,
          createdAt: savedMessage.createdAt,
        };

        io.to(toAddress).emit("user-message-at-message-box", payload);

        if (toAddress.startsWith("user:")) {
          const userId = toAddress.split(":")[1];
          notifyUserMessage(userId, ticketId, payload);
        } else {
          notifyAdminsMessage(ticketId, payload);
        }
      } catch (error) {
        console.error("Socket message error:", error);
      }
    }
  );
}

module.exports = { registerChatSocket };
