const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
saleProductModel = require('../../../src/models/sale_products.model');
const { allSalesMock, byIdMock } = require('../mocks/data');

describe('Camada model de Sale Product', function () {
  beforeEach(sinon.restore);
  it('listAllSales function', async function () {
    sinon.stub(connection, 'execute').resolves([allSalesMock]);

    const result = await saleProductModel.listAllSales();

    expect(result).to.be.deep.equal(allSalesMock);
  });
  it('findById function', async function () {
    sinon.stub(connection, 'execute').resolves([byIdMock]);

    const result = await saleProductModel.findById(1);

    expect(result).to.be.deep.equal(byIdMock);
  });
  it('insertSales function', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);

    const result = await saleProductModel.insertSales([
      {
        "productId": 1,
        "quantity": 1
      }
    ]);

    expect(result).to.be.deep.equal(1);
  });
});