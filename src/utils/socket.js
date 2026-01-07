const { getIO } = require("../config/socket");

function notifyAdminsNewTicket(ticket) {
  const io = getIO();
  io.to("role:admin").emit("admin-new-ticket", ticket);
}

function notifyAdminsMessage(ticketId, messagePayload) {
  console.log("notifyAdminsMessage", ticketId, messagePayload);
  const io = getIO();
  io.to("role:admin").emit("admin-message", { ticketId, ...messagePayload });
}

function notifyAdminsStatusChange(ticketId, statusPayload) {
  const io = getIO();
  io.to("role:admin").emit("admin-status-change", { ticketId, ...statusPayload });
}

function notifyUserStatusChange(userId, ticketId, statusPayload) {
  const io = getIO();
  io.to(`user:${userId}`).emit("user-status-change", { ticketId, ...statusPayload });
}

function notifyUserMessage(userId, ticketId, messagePayload) {
  console.log("notifyUserMessage",userId, ticketId, messagePayload)
  const io = getIO();
  io.to(`user:${userId}`).emit("user-message", { ticketId, ...messagePayload });
}


module.exports = {
  notifyAdminsNewTicket,
  notifyAdminsMessage,  
  notifyAdminsStatusChange,
  notifyUserStatusChange,
  notifyUserMessage
};