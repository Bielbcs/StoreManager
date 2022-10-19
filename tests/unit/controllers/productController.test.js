const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { allProducts, onlyOneProduct } = require('../mocks/data');
const productService = require('../../../src/services/products.service');
const productController = require('../../../src/controllers/product.controller');
const { byIdMock, allSalesMock } = require('../mocks/data');

describe('Camada Controller product', function () {
  beforeEach(sinon.restore)
  it('findAll function', async function () {
    const req = {};
    const res = {};
    const [products] = allProducts;

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productService, 'findAll').resolves({ products });

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

    sinon.stub(productService, 'findById').resolves({ message: product });

    await productController.findById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(product);
  });
  it('retorna erro caso o id seja inválido', async function () {
    const req = { params: { id: 9999 } };
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

    const message = { message: req.body }

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productService, 'submitProduct').resolves({ message });

    await productController.submitProduct(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(message);
  });
  it('submitProduct function retorna erro (nome menor que 5 letras)', async function () {
    const req = { body: { name: '1234' } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await productController.submitProduct(req, res);

    expect(res.status).to.have.been.calledWith(422);
    expect(res.json).to.have.been.calledWith({ message: '"name" length must be at least 5 characters long' });
  });
  it('submitProduct function retorna erro (faltando nome)', async function () {
    const req = { body: {} };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await productController.submitProduct(req, res);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({ message: '"name" is required' });
  });
  it('updateProduct function', async function () {
    const req = { body: { name: 'aleatorio' }, params: { id: 1 } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productService, 'updateProduct').resolves({ message: byIdMock });

    await productController.updateProduct(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(byIdMock);
  });
  it('deleteProduct function', async function () {
    const req = { params: { id: 1 } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    res.end = sinon.stub().returns();
    sinon.stub(productService, 'deleteProduct').resolves();

    await productController.deleteProduct(req, res);

    expect(res.status).to.have.been.calledWith(204);
  });
});
