const productModels = require('../models/productModels');

const getAll = async () => {
  const product = await productModels.getAll();
  return product;
};

const getById = async (id) => {
  const product = await productModels.getById(id);
  return product;
};

const registerProducts = async (register) => {
  const id = await productModels.registerProducts(register);
  return { id, name: register };
};

module.exports = {
  getById,
  getAll, 
  registerProducts,
};
