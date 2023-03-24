 const express = require('express');

const app = express();

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

const productController = require('./controllers/productControler');

// para acessar a funcao que lista todos os produtos
app.get('/products', productController.getAll);
app.get('/products/:id', productController.getById);
// abrindo pull request
// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app; 
