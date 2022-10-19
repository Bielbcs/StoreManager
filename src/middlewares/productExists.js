const productService = require('../services/products.service');

const productDidExist = async (req, res, next) => {
  const { id } = req.params;
  const { message } = await productService.findById(id);
  if (!message) return res.status(404).json({ message: 'Product not found' });
  next();
};

module.exports = {
  productDidExist,
};