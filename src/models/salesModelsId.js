const connection = require('./connection');

const registerSales = async () => {
  const query = 'INSERT INTO StoreManager.sales (date) VALUES(NOW())';
  const [register] = await connection.execute(query);
  return register; 
};

// Req08 
const listSalesComplete = async () => {
  const query = 'SELECT * FROM StoreManager.sales';
  const [getData] = await connection.execute(query);
  return getData;
};

module.exports = {
  registerSales,
  listSalesComplete,
};