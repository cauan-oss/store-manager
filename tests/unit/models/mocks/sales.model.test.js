const { expect } = require('chai');
const sinon = require('sinon');
const { salesModel } = require('../../../src/models');

const connection = require('../../../src/models/connection');
const { saleEntry, returnSale, OneSale,
  allSales,
  SaleByIdOnly,
  returnSale, } = require('./mocks/sales.model.mock');
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

  it('validando se é possível encontrar uma venda pelo ID', async function () {
    // Arrange
    sinon
      .stub(connection, 'execute').resolves([returnFindOneSale])
    // Act
    const result = await salesModel.getListIdModel(3);
    // Assert
    expect(result).to.be.deep.equal(returnSale);
  });

  it('validando se é possível encontrar todas as vendas', async function () {
    // Arrange
    sinon
      .stub(connection, 'execute').resolves([allSales])
    // Act
    const result = await salesModel.listSalesComplete();
    // Assert
    expect(result).to.be.deep.equal(allSales);
  });

  it('testando a função getListIdModel', async function () {
    // Arrange
    sinon
      .stub(connection, 'execute').resolves([[SaleByIdOnly]])
    // Act
    const result = await salesModel.getListIdModel(1);
    // Assert
    expect(result).to.be.deep.equal(SaleByIdOnly);
  });

  afterEach(function () {
    sinon.restore();
  })
})