const productService = require('../services/products.service');

const findById = async (req, res) => {
  const { id } = req.params;
  const { message } = await productService.findById(id);
  if (!message) res.status(404).json({ message: 'Product not found' });
  res.status(200).json(message); 
};

const findAll = async (_req, res) => { 
  const { products } = await productService.findAll();
  res.status(200).json(products);
};

module.exports = {
  findById,
  findAll,
};