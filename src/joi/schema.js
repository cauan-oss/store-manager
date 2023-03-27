// joi server para validar os dados de entrada;
const joi = require('joi');

const productSchema = joi.object({
  name: joi.string().required().label('name')
});

module.exports = productSchema;