 const salesModels = require('../models/salesModelsId');
 // const salesProductsModels = require('../models/salesProductsModels');
const product = require('../models/productModels');
const salesProductsModels = require('../models/salesProductsModels');

// esta funcao esta me retornando o id'
const registerSalesId = async () => {
  const register = await salesModels.registerSales();
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
 
const registerSalesProducts = async (venda, id) => {
  const hasErro = await verifyExistance(venda);
  if (hasErro.message) {
    return hasErro;
  }
  const salePromisse = venda.map((pdt) => salesProductsModels.salesProducts(pdt, id));
  await Promise.all(salePromisse);
  const objIdItem = { id, itemsSold: venda };
  return objIdItem;
}; 
 
const listSalesAll = async () => {
  const listComplete = await salesModels.listSalesComplete();
  
  return listComplete;
};

module.exports = {
  registerSalesId,
  registerSalesProducts,
  listSalesAll,
};