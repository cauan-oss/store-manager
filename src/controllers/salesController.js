const salesServices = require('../services/salesService');
const deleteService = require('../services/salesService');

const sales = async (req, res) => {
  const venda = req.body; 
  const registerSalesProducts = await salesServices.registerSalesProducts(venda);
  if (registerSalesProducts.message) {
    return res.status(404).json(registerSalesProducts);
  }
  return res.status(201).json(registerSalesProducts);
};

const listSales = async (req, res) => {
  const saleAll = await salesServices.listSalesAll();
  return res.status(200).send(saleAll);
};

const getListId = async (req, res) => {
  const { id } = req.params; 
  const idService = await salesServices.getListIdService(Number(id));
  if (idService.length === 0) {
    return res.status(404).json({ message: 'Sale not found' });
  }
  return res.status(200).json(idService);
};

const deleteSales = async (req, res) => {
  const { id } = req.params;
  const deleta = await deleteService.deleteSalesService(id);
  if (deleta.affectedRows === 0) {
    return res.status(404).json({ message: 'Sale not found' });
  }
  return res.status(204).json({ message: undefined });
};

module.exports = {
  sales,
  listSales,
  getListId,
  deleteSales,
}; 