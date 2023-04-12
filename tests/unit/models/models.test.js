const chai = require('chai');

const { expect } = chai;

const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai)
const { productsAll } = require('./mocks/product.model.mock');
const productModel = require('../../../src/models/productModels')
const connection = require('../../../src/models/connection');

describe("testando a camada model", function () {
  it('recuperando uma lista com todos os produtos', async function () {
    // arrange
    sinon.stub(connection, 'execute').resolves([productsAll])
    //act
    const result = await productModel.getAll();

    // assert
    expect(result).to.be.equal(productsAll);
  })

  it('recuperando um produto a partir do seu id', async function () {
    sinon.stub(connection, 'execute').resolves([[productsAll[0]]]);

    const result = await productModel.getById(1)

    expect(result).to.be.equal(productsAll[0]);
  })
  afterEach(function () {
    sinon.restore();
  })
})