const connection = require('./connection');

// const salesRegister = require('../services/salesService');

const salesProductsModels = async (saleProduct) => {
 // saleProduct.
  const query = 'INSERT INTO sales_products VALUES(?)';
  const registerSales = await connection.execute(query, [saleProduct]);
  return registerSales;
};

module.exports = salesProductsModels;