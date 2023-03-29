const connection = require('./connection');

// const salesRegister = require('../services/salesService');

const salesProducts = async (saleProduct, id) => {
  const query = 'INSERT INTO sales_products(sale_id, product_id, quantity) VALUES(?, ?, ?)';
  await connection.execute(query, [id, saleProduct.productId,
    saleProduct.quantity]);
};

module.exports = { salesProducts };