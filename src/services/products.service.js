const productModel = require('../models/product.model');

const findAll = async () => {
  const products = await productModel.listProducts();
  return { products };
};

const findById = async (id) => {
  const product = await productModel.findById(Number(id));
  return { message: product };
};

const submitProduct = async (product) => {
  const result = await productModel.submitProduct(product);
  const message = await productModel.findById(result);

  return { message };
};

const updateProduct = async (name, id) => {
  await productModel.updateProduct(name, id);
  const message = await productModel.findById(id);

  return { message };
};

const deleteProduct = async (id) => {
  await productModel.deleteProduct(id);
};

module.exports = {
  findAll,
  findById,
  submitProduct,
  updateProduct,
  deleteProduct,
};