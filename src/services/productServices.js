const productModels = require('../models/productModels');

const getAll = async () => {
  const product = await productModels.getAll();
  return product;
};

const getById = async (id) => {
  const product = await productModels.getById(id);
  console.log(product);
  return product;
};

const registerProducts = async (register) => {
  const id = await productModels.registerProducts(register);
  return { id, name: register };
};

const insertNewProduct = async (id, name) => {
  await productModels.insertNewProductDb(name, id);
  console.log('ahahaa');
  const productUpdate = await productModels.getById(Number(id)); 
  return productUpdate;
};

const getDeleteIdService = async (id) => {
  const deleteModels = await productModels.deletaId(id);
  return deleteModels;
};

module.exports = {
  getById,
  getAll, 
  registerProducts,
  insertNewProduct,
  getDeleteIdService,
};
