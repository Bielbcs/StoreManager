const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { allProducts, onlyOneProduct } = require('../mocks/data');
const productService = require('../../../src/services/products.service');
const productController = require('../../../src/controllers/product.controller');

describe('Camada Controller product', function () {
  beforeEach(sinon.restore)
  it('findAll function', async function () {
    const req = {};
    const res = {};
    const [products] = allProducts;

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productService, 'findAll').resolves({ type: null, products });

    await productController.findAll(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(products);
  });
  it('findById function', async function () {
    const req = { params: { id: 2 } };
    const res = {};
    const [product] = onlyOneProduct;

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productService, 'findById').resolves({ type: null, message: product });

    await productController.findById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(product);
  });
  it('retorna erro caso o id seja inválido', async function () {
    const req = { params: { id: 'a' } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productService, 'findById').resolves({ message: null });

    await productController.findById(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Product not found' });
  });
  it('submitProduct function', async function () {
    const req = { body: { name: 'aleatorio' } };
    const res = {};

    const message = { type: null, message: req.body }

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productService, 'submitProduct').resolves({ message });

    await productController.submitProduct(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(message);
  });
});
