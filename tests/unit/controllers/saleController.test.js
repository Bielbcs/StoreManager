const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require('sinon-chai');
const { expect } = chai;
chai.use(sinonChai);

const saleService = require('../../../src/services/sales.service');
const saleController = require('../../../src/controllers/sale.controller');
const { byIdMock, allSalesMock } = require('../mocks/data');


describe('Camada controller de Sales', function () {
  beforeEach(sinon.restore);
  it('listAllSales function', async function () {
    const req = {};
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(saleService, 'listAllSales').resolves({ message: allSalesMock });

    await saleController.listAllSales(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allSalesMock);
  });
  it('findById function', async function () {
    const req = { params: { id: 1 }};
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(saleService, 'findSaleById').resolves({ message: byIdMock });

    await saleController.findById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(byIdMock);
  });
  it('findById function retorna erro', async function () {
    const req = { params: { id: 1 } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(saleService, 'findSaleById').resolves({ message: [] });

    await saleController.findById(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Sale not found' });
  });
  it('submitSale function', async function () {
    const obj = {
      "id": 1,
      "itemsSold": [
        {
          "productId": 1,
          "quantity": 1
        }
      ]
    };

    const req = {};
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(saleService, 'submitSale').resolves({ message: obj });

    await saleController.submitSale(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(obj);
  });
});