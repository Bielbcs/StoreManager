const saleService = require('../services/sales.service');

const listAllSales = async (_req, res) => {
  const { message } = await saleService.listAllSales();

  res.status(200).json(message);
};

const findById = async (req, res) => {
  const { id } = req.params;

  const { message } = await saleService.findSaleById(Number(id));

  if (!message.length) return res.status(404).json({ message: 'Sale not found' });
  
  res.status(200).json(message);
};

const submitSale = async (req, res) => {
  const { message } = await saleService.submitSale(req.body);
  res.status(201).json(message);
};

module.exports = {
  submitSale,
  listAllSales,
  findById,
};