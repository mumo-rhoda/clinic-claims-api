const Joi = require('joi');
const patientSchema = Joi.object({
  name: Joi.string().min(1).required(),
  phone: Joi.string().min(7).required(),
  appointment_date: Joi.string().isoDate().required(),
  email: Joi.string().email().optional().allow(null,''),
  nhif_number: Joi.string().alphanum().min(4).max(20).optional().allow(null,''),
  city: Joi.string().optional().allow(null,'')
});
module.exports = { patientSchema };
