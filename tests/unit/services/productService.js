const { expect } = require('chai');
//alterando o codigo
const sinon = require('sinon');
const productModels = require('../../../src/models/productModels');
const productService = require('../../../src/services/productServices');

const { productsAll } = require('../models/mocks/product.model.mock');

describe('teste unitario camada service', function () {
  it("lista de todos os produtos", async function () {
    sinon.stub(productModels, 'getAll').resolves(productsAll);

    const result = await productService.getAll()

    expect(result).to.be.equal(productsAll)
  })
})