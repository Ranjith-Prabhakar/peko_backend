const authRepository = require("../../repositories/auth.repository");
const { default: ApiError } = require("../../utils/ApiError");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../../utils/token");
const { comparePassword } = require("../../utils/hashing");
const { saveSession } = require("../../utils/session.utils");
const { v4: uuidv4 } = require("uuid");

const login = async (email, password, req) => {
  const user = await authRepository.findUserByEmail(email);

  if (!user) {
    throw new ApiError(401, "Invalid email or password");
  }

  const isMatch = await comparePassword(password, user.password);
  if (!isMatch) {
    throw new ApiError(401, "Invalid email or password");
  }

  const sessionId = uuidv4();

  const accessToken = generateAccessToken({
    userId: user.id,
  });

  const refreshToken = generateRefreshToken({
    userId: user.id,
    sessionId,
  });
  console.log("user ==>", user);

  await saveSession(sessionId, {
    id: user.id,
    role: user.role,
    name: user.name,
    email: user.email,
    refreshToken,
  });

  return {
    accessToken,
    refreshToken,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  };
};

module.exports = login;
