const { Schema, model } = require('mongoose');
const Joi = require('joi');

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
// eslint-disable-next-line no-useless-escape
const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

const contactSchema = Schema({
  name: {
    type: String,
    required: [true, 'Set name for contact'],
    minlength: 3,
    maxlength: 30
  },
  email: {
    type: String,
    unique: true,
    match: emailRegex
  },
  phone: {
    type: String,
    match: phoneRegex
  },
  favorite: {
    type: Boolean,
    default: false
  },
}, { versionKey: false, timestamps: true });

const joiSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().pattern(emailRegex),
  phone: Joi.string().pattern(phoneRegex),
  favorite: Joi.boolean()
});

const favoriteSchema = Joi.object({
  favorite: Joi.boolean().required()
});

const Contact = model('contact', contactSchema);

module.exports = {
  Contact,
  joiSchema,
  favoriteSchema
};
