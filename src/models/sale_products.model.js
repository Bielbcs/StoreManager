const camelize = require('camelize');
const connection = require('./connection');

const listAllSales = async () => {
  const [result] = await connection.execute(`SELECT p.sale_id, s.date, p.product_id, p.quantity 
  FROM StoreManager.sales AS s
  INNER JOIN StoreManager.sales_products AS p
  ON s.id = p.sale_id
  ORDER BY p.sale_id, p.product_id;`);

  return camelize(result);
};

const findById = async (id) => {
  const [byId] = await connection.execute(
  `SELECT s.date, p.product_id, p.quantity FROM StoreManager.sales AS s
  INNER JOIN StoreManager.sales_products AS p
  ON s.id = p.sale_id
  WHERE p.sale_id = ?
  ORDER BY p.sale_id, p.product_id;`,
    [id],
  );

  return camelize(byId);
};

const insertSales = async (saleId, productId, quantity) => {
  const [{ insertId }] = await connection.execute(`INSERT INTO StoreManager.sales_products
  (sale_id, product_id, quantity) VALUES (?, ?, ?);`, [saleId, productId, quantity]);

  return insertId;
};

module.exports = {
  insertSales,
  listAllSales,
  findById,
};