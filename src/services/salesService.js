 const salesModels = require('../models/salesModelsId');
 // const salesProductsModels = require('../models/salesProductsModels');
const product = require('../models/productModels');

// const salesProductsModels = require('../models/salesProductsModels');

// esta funcao esta me retornando o id'
const registerSalesId = async () => {
  const register = await salesModels.registerSales();
  // console.log(register.insertId);
  return register.insertId;
};

const verifyExistance = async (venda) => {
  const ids = venda.map((obj) => obj.productId);
  const idProduct = await product.getByIdsTable(ids);
  if (ids.length !== idProduct.length) {
    return { message: 'Product not found' };
  }
  return idProduct;
};
 
const registerSalesProducts = async (venda) => {
  // passo 1: verificar se o produto existe na tabela products 
  const hasErro = verifyExistance(venda);
  if (hasErro.message) {
    return hasErro;
  }
  // passo 2: criar uma nova venda na tabela sales_product
  const insertSaleProduct = 
   
  // const ids = registerSalesId();
  // return [verifyProduct, ids];
  // passo3: juntar os produtos(passo1) com a venda((passo2) na tabela salesProducts
  // const newSale = salesProductsModels
}; 

module.exports = {
  registerSalesId,
  registerSalesProducts,
};