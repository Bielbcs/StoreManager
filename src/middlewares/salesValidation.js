const Joi = require('joi');
const productModel = require('../models/product.model');

const test = (productId, quantity) => {
  const schema = Joi.object({
    productId: Joi.number().integer().min(1).required(),
    quantity: Joi.number().integer().min(1).required(),
  });

  const { error } = schema.validate({ productId, quantity });
  if (error) throw new Error(error.message);
};

const validate = (req, res, next) => {
  try {
    const { body } = req;
    body.forEach(({ productId, quantity }) => {
      test(productId, quantity);
    });
  } catch (error) {
    console.log(error);
    const type = error.message.includes('greater') ? 422 : 400;
    return res.status(type).json({ message: error.message });
  }
  next();
};

const validateProductId = async (req, res, next) => {
  const { body } = req;

  try {
    const promises = body.map(async ({ productId }) => {
      const result = await productModel.findById(productId);
      if (!result) throw new Error('Product not found');
    });
    await Promise.all(promises);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }

  next();
};

module.exports = {
  validate,
  validateProductId,
};