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

const getByIdsTable = async (ids) => {
  const interrogacoes = ids.map(() => '?');
  const query = `SELECT * FROM products WHERE id IN (${interrogacoes})`;
  //                                          tirando de dentro de um array e colocando em outro
  const [productId] = await connection.execute(query, [...ids]);
  return productId;
  
};

const registerProducts = async (register) => {
  const query = 'INSERT INTO StoreManager.products(name) VALUES(?)';
  const [productRegister] = await connection.execute(query, [register]);
  // console.log(productRegister.insertId);
  return productRegister.insertId;
};


module.exports = {
  getById,
  getAll,
  registerProducts,
  getByIdsTable,
};