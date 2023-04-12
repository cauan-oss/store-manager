const productServices = require('../services/productServices');
// const { sales } = require('./salesController');
// const salesModels = require('../models/salesModelsId');

const getAll = async (req, res) => {
  const product = await productServices.getAll();
  return res.status(200).json(product);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const productId = await productServices.getById(id);
  if (!productId) {
    return res.status(404).json({ message: 'Product not found' });
  } 
  res.status(200).send(productId); 
};

const registerProducts = async (req, res) => {
  // valor da chave nome que vem da requisicao
  const { name } = req.body;
  // passa o valor da chave name para a funcao que esta no services.
  const result = await productServices.registerProducts(name);
  res.status(201).send(result);
};

const newProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const insertNewProduct = await productServices.insertNewProduct(id, name);
   if (!insertNewProduct) {
    return res.status(404).send({ message: 'Product not found' });
  }
  return res.status(200).json(insertNewProduct);
};

const getDeleteId = async (req, res) => {
  const { id } = req.params;
  const deleteProduct = await productServices.getDeleteIdService(id);
  console.log('meu', deleteProduct);
  if (deleteProduct.affectedRows === 0) {
    return res.status(404).json({ message: 'Product not found' });
  }
  console.log(deleteProduct.insertId);
  return res.status(204).json({ deleteProduct });
};

module.exports = {
  getById,
  getAll, 
  registerProducts,
  newProduct,
  getDeleteId,
};