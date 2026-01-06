const { default: ApiError } = require("../utils/ApiError");

module.exports = (req, res, next) => {
  const user = req.user; 
  const { status } = req.body;

  if (!user) {
    return next(new ApiError(401, "Unauthorized: User not found"));
  }

  if (user.role === "user" && status !== "closed") {
    return next(
      new ApiError(403, "Users can only set ticket status to 'closed'.")
    );
  }

  next();
};
