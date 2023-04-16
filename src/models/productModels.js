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
   // console.log(product);
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

const insertNewProductDb = async (id, name) => {
  // console.log('esse e o meu name na models', id, name);
  const query = 'UPDATE StoreManager.products SET name = ? where id = ?';
  const [insert] = await connection.execute(query, [id, name]);
  // console.log(insert);
  return insert;
};

const deletaId = async (id) => {
  const query = 'DELETE FROM products WHERE id = ?';
  const [deleta] = await connection.execute(query, [id]);
  // console.log('deleta', deleta);
  return deleta;
};

const getQuery = async (query) => {
  const search = 'SELECT * FROM StoreManager.products WHERE name LIKE ?';
  const [querySearch] = await connection.execute(search, [`%${query}%`]);
  console.log('akakak', querySearch);
  return querySearch;
};

module.exports = {
  getById,
  getAll,
  registerProducts,
  getByIdsTable,
  insertNewProductDb,
  deletaId,
  getQuery,
};