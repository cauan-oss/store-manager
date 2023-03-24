const connection = require('./connection');

const getAll = async () => {
  const query = 'SELECT * FROM StoreManager.products';
  const [product] = await connection.execute(query);
  return product;
};

const getById = async (id) => {
  const query = 'SELECT * FROM StoreManager.products WHERE id = ?';
  /* na const product, usamos o conection.execute para rodar 
  o comando da const query, o array serve para capturar o numero que vai no ? */
  const [[product]] = await connection.execute(query, [id]);
  return product;
};

module.exports = {
  getById,
  getAll,
};