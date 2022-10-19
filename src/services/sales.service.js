const saleProductModel = require('../models/sale_products.model');
const saleModel = require('../models/sale.model');

const findSaleById = async (id) => {
  const sale = await saleProductModel.findById(Number(id));
  return { message: sale };
};

const listAllSales = async () => {
  const result = await saleProductModel.listAllSales();
  return { message: result };
};

const submitSale = async (sales) => {
  const id = await saleModel.submitSale();

  const promises = sales
    .map((sale) => saleProductModel.insertSales(id, sale.productId, sale.quantity));
  await Promise.all(promises);

  const object = {
    id,
    itemsSold: sales,
  };

  return { message: object };
};

module.exports = {
  findSaleById,
  submitSale,
  listAllSales,
};