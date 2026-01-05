const { User } = require("../../../models");

const createUser = async (userData) => {
  return await User.create(userData);
};

module.exports = createUser;
