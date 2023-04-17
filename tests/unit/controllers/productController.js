const chai = require('chai');

const { expect } = chai;

const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai)
const productController  = require('../../../src/controllers/productControler');
const productService  = require('../../../src/services/productServices');

const { productAll, product, returnValidProduct, queryProduct  } = require('../models/mocks/product.model.mock');
const connection = require('../../../src/models/connection');

describe('teste unitario camada controler', function () {
 
  it("deve retornar o status 200 e a lista", async function () {
    sinon.stub(productService, 'getAll').resolves(productAll);

    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res)
    res.json = sinon.stub().returns();

    const result = await productController.getAll(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productAll);
  });

  it('testando o retorno ao procurar produto com id valido', async function () {
    const res = {};
    const req = {
      params: { id: 1 },
        body: { name: 'golfao sportline' }  
    };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon
      .stub(productService, 'insertNewProduct').resolves(returnValidProduct);
    // Act
    await productController.newProduct(req, res);
    // Assert
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(returnValidProduct);
  })

  it('testando o retorno ao procurar produto com id invalido', async function () {
    afterEach = () => {
      sinon.restore()
    }
    const err = {  message: 'Product not found' };
    const res = {};
    const req = {
      params: { id: 50 },
      body: { name: 'jetta gli' }
    };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon
       
      .stub(productService, 'insertNewProduct').resolves(undefined);
    // Act
    await productController.newProduct(req, res);
    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Product not found' })
    /* expect(error.message).to.be.deep.equal('Product not found');
    expect(error.type).to.be.equal(404); */
  })

  it('Testando cadastro de produto', async function () {
    // Arrange
    const res = {};
    const req = {
      body: product,
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon
      .stub(productService, 'registerProducts').resolves(returnValidProduct);
    // Act
    await productController.registerProducts(req, res);
    // Assert
    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(returnValidProduct);
  })

  it('Testando atualizar produto com sucesso com id válido', async function () {
    // Arrange
    const res = {};
    const req = {
      body: product,
      params: { id: 1 },
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon
      .stub(productService, 'insertNewProduct').resolves(returnValidProduct);
    // Act
    await productController.newProduct(req, res);
    // Assert
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(returnValidProduct);
  })
  it('Testando deletar produto com sucesso com id válido', async function () {
    // Arrange
    const res = {};
    const req = {
      params: { id: 1 },
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon
      .stub(productService, 'getDeleteIdService').resolves({ affectedRows: 1 });
    // Act
    await productController.getDeleteId(req, res);
    // Assert
    expect(res.status).to.have.been.calledWith(204);
    expect(res.json).to.have.been.calledWith();
  })

  it('testando o retorno ao deletar produto com id inválido', async function () {
    // Arrange
   
    const res = {};
    const req = {
      params: { id: 50 },
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon
      .stub(productService, 'getDeleteIdService').resolves({ affectedRows: 0 });
    // Act
    await productController.getDeleteId(req, res);
    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Product not found' });

  })

  it('Testando o endpoint products/search', async function () {
    const res = {};
    const req = {
      query: { q: 'Martelo' }
    };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    
    sinon
    .stub(productService, 'productQueryService').resolves(queryProduct)
    await productController.productQuery(req, res)
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(queryProduct);

  });

  afterEach(function () {
    sinon.restore();
  })
  })