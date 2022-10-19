const { expect } = require('chai');
const sinon = require('sinon');
const { byIdMock, allSalesMock } = require('../mocks/data');
const productModel = require('../../../src/models/sale_products.model');
const saleModel = require('../../../src/models/sale.model');
const saleService = require('../../../src/services/sales.service');

describe('Camada Service Sales', function () {
  it('findSaleById function', async function () {
    sinon.stub(productModel, 'findById').resolves(byIdMock);

    const result = await saleService.findSaleById(1);

    expect(result).to.be.deep.equal({ message: byIdMock });
  });
  it('listAllSales function', async function () {
    sinon.stub(productModel, 'listAllSales').resolves(allSalesMock);

    const result = await saleService.listAllSales();

    expect(result).to.be.deep.equal({ message: allSalesMock });
  });
  it('submitSale function', async function () {
    sinon.stub(saleModel, 'submitSale').resolves(1);
    sinon.stub(productModel, 'insertSales').resolves([1]);

    const result = await saleService.submitSale([
      {
        "productId": 1,
        "quantity": 1
      }
    ]);

    expect(result).to.be.deep.equal({ message: {
      "id": 1,
      "itemsSold": [
        {
          "productId": 1,
          "quantity": 1
        }
      ]
    }})
  })
});