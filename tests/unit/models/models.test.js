const chai = require('chai');

const { expect } = chai;

const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai)
const { productAll } = require('./mocks/product.model.mock');
const productModel = require('../../../src/models/productModels')
const connection = require('../../../src/models/connection');

describe("testando a camada model", function () {
  it('recuperando uma lista com todos os produtos', async function () {
    // arrange
    sinon.stub(connection, 'execute').resolves([productAll])
    //act
    const result = await productModel.getAll();

    // assert
    expect(result).to.be.equal(productAll);
  })

  it('recuperando um produto a partir do seu id', async function () {
    sinon.stub(connection, 'execute').resolves([[productAll[0]]]);

    const result = await productModel.getById(1)

    expect(result).to.be.equal(productAll[0]);
  })
  afterEach(function () {
    sinon.restore();
  })
})