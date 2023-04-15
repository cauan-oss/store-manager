const connection = require('./connection');

// const salesRegister = require('../services/salesService');

const salesProducts = async (saleProduct, id) => {
  console.log('entrei em product');
  const query = 'INSERT INTO sales_products(sale_id, product_id, quantity) VALUES(?, ?, ?)';
  await connection.execute(query, [id, saleProduct.productId,
    saleProduct.quantity]);
};

const updateSalesProducts = async (id, update) => {
  const updateSale = await update.map(({ quantity, productId }) =>
    connection.execute(`UPDATE sales_products SET quantity = ? 
  WHERE sale_id = ? AND product_id = ?`, [quantity, id, productId]));
  
  const data = await Promise.all(updateSale);
  console.log('modell', data);
};

module.exports = { salesProducts, updateSalesProducts };