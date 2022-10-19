const saleService = require('../services/sales.service');

const listAllSales = async (_req, res) => {
  const { message } = await saleService.listAllSales();

  res.status(200).json(message);
};

const submitSale = async (req, res) => {
  console.log('AAAAAAAAAAAAAAAAAAAA');
  const { message } = await saleService.submitSale(req.body);
  res.status(201).json(message);
};

module.exports = {
  submitSale,
  listAllSales,
};