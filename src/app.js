 const express = require('express');

const app = express();
app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

const productController = require('./controllers/productControler');

// Req01
app.get('/products', productController.getAll);
app.get('/products/:id', productController.getById);
// Req03 
app.post('/products', productController.registerProducts);

module.exports = app; 
