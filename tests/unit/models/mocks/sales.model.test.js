const { expect } = require('chai');
const sinon = require('sinon');
const { salesModel } = require('../../../src/models');

const connection = require('../../../src/models/connection');
const { saleEntry, returnSale } = require('./mocks/sales.model.mock');
const insertId = { insertId: 3 }
describe('teste unitário da camada model sales', function () {
  it('validando se é possível cadastrar uma venda com sucesso', async function () {
    // Arrange
    sinon.stub(connection, 'execute')
      .onFirstCall().resolves([insertId])
      .onSecondCall().resolves(saleEntry)
    // Act
    const result = await salesModel.registerSales(saleEntry);
    // Assert
    expect(result).to.be.deep.equal(returnSale);
  });

  afterEach(function () {
    sinon.restore();
  })
})