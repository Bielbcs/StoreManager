const productModel = require('../models/product.model');

const findAll = async () => {
  const products = await productModel.listProducts();
  return { type: null, products };
};

const findById = async (id) => {
  const product = await productModel.findById(Number(id));
  return { type: null, message: product };
};

module.exports = {
  findAll,
  findById,
};