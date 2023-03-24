// 1.1-listar todos os produtos com status 200;
//  1.2- listar produtos pelo id; 
//  1.3- listar produtos 

const productServices = require('../services/productServices');

const getAll = async (req, res) => {
  const product = await productServices.getAll();
  res.status(200).send(product);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const productId = await productServices.getById(id);
  if (!productId) {
    return res.status(404).send({ message: 'Product not found' });
  } 
  res.status(200).send(productId); 
};

module.exports = {
  getById,
  getAll, 
};