const Joi = require("joi");

const ticketSchema = Joi.object({
  title: Joi.string()
    .trim()
    .min(3)
    .max(255)
    .required(),

  description: Joi.string()
    .trim()
    .min(10)
    .required(),

  categoryId: Joi.number()
    .integer()
    .positive()
    .required(),

  priority: Joi.string()
    .valid("low", "medium", "high")
    .default("medium")
});

module.exports = ticketSchema;
