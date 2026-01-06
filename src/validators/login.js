const Joi = require('joi');

const loginSchema = Joi.object({
email: Joi.string().email().required(),

  password: Joi.string()
    .min(8)
    .max(30)
    .pattern(
      new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])")
    )
    .required()
    .messages({
      "string.pattern.base":
        "Password must include uppercase, lowercase, number, and special character.",
    }),

});

module.exports = loginSchema
