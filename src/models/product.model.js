const connection = require('./connection');

const listProducts = async (id) => {
  if (id) {
    const [[byId]] = await connection.execute(
      'SELECT * FROM StoreManager.products WHERE id = ?',
      [Number(id)],
    );
    return byId;
  }
  const [all] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  return all;
};

module.exports = {
  listProducts,
};
