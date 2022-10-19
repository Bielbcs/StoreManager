const productService = require('../services/products.service');

const findById = async (req, res) => {
  const { id } = req.params;
  const { message } = await productService.findById(id);
  res.status(200).json(message); 
};

const findAll = async (_req, res) => { 
  const { products } = await productService.findAll();
  res.status(200).json(products);
};

const submitProduct = async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: '"name" is required' });
  if (name.length < 5) {
    return res.status(422)
      .json({ message: '"name" length must be at least 5 characters long' });
  }
  const { message } = await productService.submitProduct({ name });
  res.status(201).json(message);
};

const updateProduct = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  const { message } = await productService.updateProduct(name, Number(id));
  res.status(200).json(message);
};

module.exports = {
  findById,
  findAll,
  submitProduct,
  updateProduct,
};