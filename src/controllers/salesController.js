const salesServices = require('../services/salesService');

const sales = async (req, res) => {
  const { quantify } = req.body;
  const register = await salesServices.registerSalesId(quantify);
  const venda = req.body; 
  const registerSalesProducts = await salesServices.registerSalesProducts(venda);
  if (registerSalesProducts.message) {
    return res.status(404).json(registerSalesProducts);
  };
  res.status(200).send('cadastrou');
  return register;
};

module.exports = {
  sales,
}; 