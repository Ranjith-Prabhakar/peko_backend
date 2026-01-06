const { getTicketsService } = require("../../services/ticket.service");

async function getTicketsController(req, res) {
  const page = Number(req.query.page) || 1;
  const userId = req.user.id;
  const role = req.user.role;

  const result = await getTicketsService({
    page,
    userId,
    role
  });

  res.status(200).json({
    success: true,
    ...result
  });
}

module.exports = getTicketsController;
