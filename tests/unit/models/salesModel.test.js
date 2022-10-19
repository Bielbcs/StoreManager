const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const saleModel = require('../../../src/models/sale.model');

describe('Camada model de Sale', function () {
  it('submitSale function', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 2 }]);

    const result = await saleModel.submitSale();

    expect(result).to.be.equal(2);
  });
});