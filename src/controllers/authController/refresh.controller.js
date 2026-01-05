const { refresh } = require("../../services/auth.service");
const { refreshTokenOptions } = require("../../config/cookie");
const { default: ApiError } = require("../../utils/ApiError");

async function refreshController(req, res) {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    throw new ApiError(401, "Unauthorized");
  }

  const {
    accessToken,
    refreshToken: newRefreshToken,
    user,
  } = await refresh(refreshToken);

  res
    .cookie("refreshToken", newRefreshToken, refreshTokenOptions)
    .status(200)
    .json({
      success: true,
      message: "Token refreshed successfuliy",
      data: { accessToken, data: user },
    });
}

module.exports = refreshController;
