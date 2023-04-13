const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const  salesService  = require('../../../src/services/salesService');

const  salesController  = require('../../../src/controllers/salesController');
const { returnSale } = require('../models/mocks/sales.model.mock');

describe('teste unitário da camada controller sale', function () {
  it('Deve retornar o status 201 e o registro de venda', async function () {
    // Arrange
    const res = {};
    const req = {
      body: returnSale,
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon
      .stub(salesService, 'registerSalesProducts').resolves(returnSale);
    // Act
    await salesController.sales(req, res);
    // Assert
    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(returnSale);
  })
})