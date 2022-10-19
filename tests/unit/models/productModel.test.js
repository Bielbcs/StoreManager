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
  it('insert new product', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 2 }]);

    const result = await productModel.submitProduct({ name: 'test' });

    expect(result).to.be.deep.equal(2);
  });
  it('updateProduct', async function () {
    sinon.stub(connection, 'execute').resolves();

    await productModel.updateProduct('teste', 1);
  });
  it('deleteProduct', async function () {
    sinon.stub(connection, 'execute').resolves();

    await productModel.deleteProduct(1);
  });
});