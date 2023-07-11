const Joi = require("joi");

const schema = Joi.object({
  name: Joi.string().required(),
  phone: Joi.string()
    .pattern(/^[0-9]+$/)
    .required(),
  email: Joi.string().email().required(),
});

module.exports = {
  schema,
};
