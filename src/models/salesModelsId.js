const connection = require('./connection');

const registerSales = async () => {
  const query = 'INSERT INTO StoreManager.sales (date) VALUES(NOW())';
  const [register] = await connection.execute(query);
  return register; 
};

// Req08 
const listSalesComplete = async () => {
  const query = `select sale_Id as saleId, date, 
  product_id as productId, quantity from StoreManager.sales 
  inner join StoreManager.sales_products on id = sale_id;`;
  const [getData] = await connection.execute(query);
  return getData;
};

const getListIdModel = async (id) => {
  const query = `select date, product_id as productId, 
  quantity from StoreManager.sales inner join
  StoreManager.sales_products on id = sale_id where id = ?`;
  const [getId] = await connection.execute(query, [id]);
  return getId;
};

const salesDeleteModel = async (id) => {
  const query = 'DELETE FROM sales WHERE id = ?';
  const [deleteSaleId] = await connection.execute(query, [id]);
  return deleteSaleId;
};

module.exports = {
  registerSales,
  listSalesComplete,
  getListIdModel,
  salesDeleteModel,
};