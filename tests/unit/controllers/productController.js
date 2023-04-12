const chai = require('chai');

const { expect } = chai;

const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai)
const productController  = require('../../../src/controllers/productControler');
const productService  = require('../../../src/services/productServices');

const { productAll } = require('../models/mocks/product.model.mock');
const connection = require('../../../src/models/connection');

describe('teste unitario camada service', function () {
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

})