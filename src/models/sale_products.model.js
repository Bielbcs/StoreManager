const connection = require('./connection');

const listAllSales = async () => {
  const [result] = await connection.execute('SELECT * FROM StoreManager.sales');
  return result;
};

const findById = async (id) => {
  const [[byId]] = await connection.execute(
    'SELECT product_id, quantity FROM StoreManager.sales_products WHERE id = ?',
    [id],
  );
  return byId;
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