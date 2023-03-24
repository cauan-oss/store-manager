const productModels = require('../models/productModels');

const getAll = async () => {
  const product = await productModels.getAll();
  return product;
};

const getById = async (id) => {
  const product = await productModels.getById(id);
  return product;
};

module.exports = {
  getById,
  getAll, 
};
