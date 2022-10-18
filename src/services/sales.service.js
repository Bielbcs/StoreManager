const saleModel = require('../models/sale.model');

const findSaleById = async (id) => {
  const sale = await saleModel.findById(Number(id));
  return { type: null, message: sale };
};

const submitSale = async (sale) => {
  const sales = await saleModel.submitProduct(sale);
  console.log(sales);
};

module.exports = {
  findSaleById,
  submitSale,
};