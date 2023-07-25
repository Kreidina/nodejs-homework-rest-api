const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleMongooseError } = require("../helpers");
const phoneValid = /^\(\d{3}\) \d{3}-\d{4}$/;
const emailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
      match: emailValid,
      required: true,
    },
    phone: {
      type: String,
      match: phoneValid,
      required: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);
contactSchema.post("save", handleMongooseError);

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(emailValid).required(),
  phone: Joi.string().pattern(phoneValid).required(),
  favorite: Joi.boolean(),
});

const favoriteShema = Joi.object({
  favorite: Joi.boolean().required(),
});

const schemas = {
  addSchema,
  favoriteShema,
};
const Contact = model("contact", contactSchema);

module.exports = { Contact, schemas };
