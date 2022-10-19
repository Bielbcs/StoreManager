const snakeize = require('snakeize');
const connection = require('./connection');

const findById = async (id) => {
  const [[byId]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [id],
  );
  return byId;
};

const listProducts = async () => {
  const [all] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  return all;
};

const submitProduct = async (product) => {
  const columns = Object.keys(snakeize(product))
    .map((key) => `${key}`)
    .join(', ');

  const placeholders = Object.keys(product)
    .map((_key) => '?')
    .join(', ');

  const [{ insertId }] = await connection.execute(
    `INSERT INTO StoreManager.products (${columns}) VALUE (${placeholders})`,
    [...Object.values(product)],
  );
  
  return insertId;
};

const updateProduct = async (name, id) => {
  await connection.execute(
    'UPDATE StoreManager.products SET name = ? WHERE id = ?', [name, id],
  );
};

const deleteProduct = async (id) => {
  await connection.execute('DELETE FROM StoreManager.products WHERE id = ?', [id]);
};

module.exports = {
  listProducts,
  findById,
  submitProduct,
  updateProduct,
  deleteProduct,
};
