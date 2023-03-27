const connection = require('./connection');

const registerSales = async () => {
  const query = 'INSERT INTO StoreManager.sales(date) VALUES(NOW())';
   const [register] = await connection.execute(query);
  return register; 
};

module.exports = {
  registerSales,
};