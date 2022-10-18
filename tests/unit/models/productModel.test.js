const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const productModel = require('../../../src/models/product.model');
const { allProducts, onlyOneProduct } = require('../mocks/data');

describe('Camada Model product', function () {
  afterEach(sinon.restore);
  it('list all products', async function () {
    sinon.stub(connection, 'execute').resolves(allProducts);
    const result = await productModel.listProducts();
    expect(result).to.be.deep.equal(allProducts[0]);
  });
  it('list product by id', async function () {
    sinon.stub(connection, 'execute').resolves(onlyOneProduct);

    const result = await productModel.findById(2)

    expect(result).to.be.deep.equal(allProducts[0][1]);
  });
});