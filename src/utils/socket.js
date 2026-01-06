const { getIO } = require("../config/socket");

function notifyUser(userId, payload) {
  const io = getIO();
  io.to(`user:${userId}`).emit("notification", payload);
}

function notifyAdmins(payload) {
  const io = getIO();
  io.to("role:admin").emit("admin-notification", payload);
}


module.exports = {notifyUser,notifyAdmins};
