const salesServices = require('../services/salesService');

const sales = async (req, res) => {
  const { quantify } = req.body;

  const register = await salesServices.registerSalesId(quantify);
  // console.log(register);
  const venda = req.body; 
  const registerSalesProducts = await salesServices.registerSalesProducts(venda, register);
  if (registerSalesProducts.message) {
    return res.status(404).json(registerSalesProducts);
  }
  return res.status(201).json(registerSalesProducts);
};

const listSales = async (req, res) => {
  const saleAll = await salesServices.listSalesAll();
  return res.status(200).send(saleAll);
};

module.exports = {
  sales,
  listSales,
}; 