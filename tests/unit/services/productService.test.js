const { expect } = require('chai');
const sinon = require('sinon');
const { allProducts, onlyOneProduct } = require('../mocks/data');
const productModel = require('../../../src/models/product.model');
const productService = require('../../../src/services/products.service');

describe('Camada Service product', function () {
  beforeEach(sinon.restore);
  it('findAll function', async function () {
    const [products] = allProducts;
    
    const expectedResult = { products };

    sinon.stub(productModel, 'listProducts').returns(products);

    const result = await productService.findAll();

    expect(result).to.be.deep.equal(expectedResult);
  });
  it('findById function', async function () {
    const [product] = onlyOneProduct;

    const expectedResult = { message: product };

    sinon.stub(productModel, 'findById').returns(product);

    const result = await productService.findById(2);

    expect(result).to.be.deep.equal(expectedResult);
  });
  it('submitProduct function', async function () {
    const message = { id: 2, name: 'aleatorio' };
    sinon.stub(productModel, 'submitProduct').resolves(2);
    sinon.stub(productModel, 'findById').resolves(message);
    
    const result = await productService.submitProduct({ name: 'aleatorio' });

    expect(result).to.be.deep.equal({ message });
  });
  it('updateProduct function', async function () {
    const message = [{ id: 2, name: 'aleatorio' }];
    sinon.stub(productModel, 'updateProduct').resolves();
    sinon.stub(productModel, 'findById').resolves(message);

    const result = await productService.updateProduct({ name: 'aleatorio' });

    expect(result).to.be.deep.equal({ message });
  });
  it('deleteProduct function', async function () {
    sinon.stub(productModel, 'deleteProduct').resolves();

    await productService.deleteProduct(1);
  });
});
