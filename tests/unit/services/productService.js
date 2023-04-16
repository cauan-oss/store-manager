const chai = require('chai')
const { expect } = require('chai');
//alterando o codigo
const sinon = require('sinon');
const sinonChai = require('sinon-chai');


chai.use(sinonChai);
const productModels = require('../../../src/models/productModels');
const productService = require('../../../src/services/productServices');

const { productsAll, product, returnValidProduct, queryProduct } = require('../models/mocks/product.model.mock');
const { query } = require('../../../src/models/connection');

describe('teste unitario camada service', function () {
  it("lista de todos os produtos", async function () {
    sinon.stub(productModels, 'getAll').resolves(productsAll);

    const result = await productService.getAll()

    expect(result).to.be.equal(productsAll)
  });
  it('Recuperando um produto com id válido', async function () {
    sinon.stub(productModels, 'getById').resolves(returnValidProduct);
    const result = await productService.getById(1);
    expect(result).to.be.equal(returnValidProduct);
  });

  it('Recuperando um produto com id inválido', async function () {
    sinon.stub(productModels, 'getById').resolves(undefined);
    try {
      await productService.getById(50);
    } catch (error) {
      expect(error.status).to.be.equal(404)
      expect(error.message).to.be.deep.equal('Product not found')
    }


  });
  it('cadastrando um produto com sucesso', async function () {
    
    // Arrange
    sinon.stub(productModels, 'registerProducts').resolves(1);
    // Act
    const result = await productService.registerProducts(product.name);
    // Assert
    expect(result).to.be.deep.equal(returnValidProduct);
  });
  
  it('Atualizando um produto válido com sucesso', async function () {
    // Arrange
    sinon.stub(productModels, 'getById').resolves(returnValidProduct);
    // Act
    const result = await productService.insertNewProduct(1, 'golfao sportline');
    // Assert
    expect(result).to.be.deep.equal(returnValidProduct);
    // expect(result.name).to.be.deep.equal('Xablauzão phone 10');
  })
  it('teste retorno ao tentar atualizar com id inválido', async function () {
    // Arrange
    sinon.stub(productModels, 'getById').resolves(undefined);
    // Act
    try {
      await productService.insertNewProduct(50, 'golfao sportline');

    } catch (error) {
      expect(error.status).to.be.equal(404);
      expect(error.message).to.be.deep.equal('Product not found')
    }
    // Assert
  })
  it('Testando o endpoint products / search', async () => {
    sinon.stub(productModels, 'getQuery').resolves(queryProduct);
    const result = await productService.productQueryService('Martelo');

    expect(result).to.be.deep.equal(queryProduct);
  });

  afterEach(function () {
    sinon.restore();
  })
})