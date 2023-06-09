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
 
const registerSalesProducts = async (venda) => {
  const hasErro = await verifyExistance(venda);
  if (hasErro.message) {
    return hasErro;
  }
  const id = await registerSalesId();
  console.log(id);
  const salePromisse = venda.map((pdt) => salesProductsModels.salesProducts(pdt, id));
  await Promise.all(salePromisse);
  const objIdItem = { id, itemsSold: venda };
  return objIdItem;
}; 
 
const listSalesAll = async () => {
  const listComplete = await salesModels.listSalesComplete();
  return listComplete;
};

const getListIdService = async (id) => {
  const idForModel = await salesModels.getListIdModel(id);
  // console.log('meu id', idForModel);
  return idForModel;
};

const deleteSalesService = async (id) => {
  const deletar = await salesModels.salesDeleteModel(id);
  return deletar;
};

const updateSalesService = async (id, update) => {
  const getId = await salesModels.getListIdModel(id);
  if (getId.length === 0) {
    return { message: 'Sale not found' };
  }
  /* const updateSale = salesProductsModels.updateSalesProducts(update, id); */
  const buscaProduto = await Promise.all(update.map(({ productId }) =>
    product.getById(productId)));
  console.log('salesssss', buscaProduto);
  if (buscaProduto.includes(undefined)) {
    return { message: 'Product not found' };
  }

  await salesProductsModels.updateSalesProducts(id, update);
  return {
    saleId: id, itemsUpdated: update,
  };
};

module.exports = {
  registerSalesId,
  registerSalesProducts,
  listSalesAll,
  getListIdService,
  deleteSalesService,
  updateSalesService,
};