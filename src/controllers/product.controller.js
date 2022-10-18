const productService = require('../services/products.service');

const findById = async (req, res) => {
  const { id } = req.params;
  const { product } = await productService.findById(id);
  if (!product) res.status(404).send({ message: 'Product not found' });
  res.status(200).json(product); 
};

const findAll = async (_req, res) => { 
  const { products } = await productService.findAll();
  res.status(200).json(products);
};

module.exports = {
  findById,
  findAll,
};