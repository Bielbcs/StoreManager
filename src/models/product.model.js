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

module.exports = {
  listProducts,
  findById,
};
