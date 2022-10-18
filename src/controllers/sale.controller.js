const saleService = require('../services/sales.service');

const submitSale = async (req, res) => {
  const { message } = await saleService.submitSale(req.body);
  res.status(201).json(message);
};

module.exports = {
  submitSale,
};