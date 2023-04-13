const { expect } = require('chai');
const sinon = require('sinon');
const salesProducts = require('../../../src/models/salesProductsModels')
const  salesModelId = require('../../../src/models/salesModelsId');
const productModels = require('../../../src/models/productModels')
const  salesService  = require('../../../src/services/salesService');
const { saleEntry, returnSale } = require('../models/mocks/sales.model.mock');

describe('teste unitário da camada service sales', function () {
  it('validando se é possível cadastrar uma venda com sucesso', async function () {
    // Arrange
    sinon.stub(productModels, 'getById').resolves(saleEntry);
    sinon.stub(salesModelId, 'registerSales').resolves({ insertId: 3 });
    sinon.stub(salesProducts, 'salesProducts').resolves();
    // Act
    const result = await salesService.registerSalesProducts(saleEntry);
    
    // Assert
    expect(result).to.be.deep.equal(returnSale);
  })
})