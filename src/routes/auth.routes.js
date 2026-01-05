const express = require("express");
const tryCatchHandler = require("../utils/tryCatch");
const validate = require("../middlewares/genericValidator");
const { signupSchema } = require("../validators/authValidators");
const {
  signupController,
} = require("../controllers/authController");

function authRoutes() {
  const router = express.Router();
  router.post(
    "/signup",
    validate(signupSchema),
    tryCatchHandler(signupController)
  );
 
  return router;
}

module.exports = authRoutes;
