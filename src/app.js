const express = require('express');
const productController = require('./controllers/productControler');
const productDataValidate = require('./middlewares/productDataValidator');
const salesController = require('./controllers/salesController');
const validateProductId = require('./middlewares/validateProductId');
const validateQuantity = require('./middlewares/validateQuantity');
// const listSales = require('./controllers/salesController');

const app = express();
app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products/search', productController.productQuery);
// Req01
app.get('/products', productController.getAll);
app.get('/products/:id', productController.getById);
// Req03&&Req04
app.post('/products', productDataValidate, productController.registerProducts);
// Req06
app.post('/sales', [validateProductId, validateQuantity], salesController.sales);
//  Req08
app.get('/sales', salesController.listSales);
app.get('/sales/:id', salesController.getListId);
// Req10 
app.put('/products/:id', productDataValidate, productController.newProduct);
// Req12
app.delete('/products/:id', productController.getDeleteId);
// Req14
app.delete('/sales/:id', salesController.deleteSales);
// Req16
app.put('/sales/:id', validateProductId, validateQuantity, salesController.updateSales);
// Req18

module.exports = app; 
