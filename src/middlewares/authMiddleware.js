const { default: ApiError } = require("../utils/ApiError");
const { verifyToken } = require("../utils/token");
const { JWT_ACCESS_SECRET, JWT_REFRESH_SECRET } = require("../config/env");
const { getSession } = require("../utils/session.utils");

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new ApiError(401, "Access token missing");
    }

    const accessToken = authHeader.split(" ")[1];
    const refreshToken = req.cookies?.refreshToken;

    if (!refreshToken) {
      throw new ApiError(401, "Refresh token missing");
    }

    const accessPayload = verifyToken(accessToken, JWT_ACCESS_SECRET);

    console.log("accessssssssssssssssss")
    const refreshPayload = verifyToken(refreshToken, JWT_REFRESH_SECRET);

    const { sid } = refreshPayload;
    if (!sid) {
      throw new ApiError(401, "Invalid refresh token payload");
    }

  
    const session = await getSession(sid);
    if (!session) {
      throw new ApiError(401, "Session expired");
    }

    if (session.refreshToken !== refreshToken) {
      throw new ApiError(401, "Refresh token mismatch");
    }

    console.log("session-------",session)
    req.user = {
      id: session.id,
      name: session.name,
      email: session.email,
      role: session.role,
      sessionId: sid
    };

    next();
  } catch (err) {
    console.error("Authentication error:-----", err);
    next(err);
  }
};

module.exports = authMiddleware;
