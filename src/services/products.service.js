const productModel = require('../models/product.model');

const findAll = async () => {
  const products = await productModel.listProducts();
  return { type: null, products };
};

const findById = async (id) => {
  const product = await productModel.listProducts(id);
  return { type: null, product };
};

module.exports = {
  findAll,
  findById,
};