// require('dotenv').config(); 

const mysql = require('mysql2/promise');
// aprendendo a configurar a conexao com o banco de dados;
const connection = mysql.createPool({
  // process.env converte o valor passado em string; 
  host: process.env.MYSQL_HOST, 
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  port: process.env.MYSQL_PORT,
  database: process.env.MYSQL_DATABASE || 'StoreManager',
});

module.exports = connection;