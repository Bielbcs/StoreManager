const connection = require('./connection');

const submitSale = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (current_timestamp())',
  );

  return insertId;
};

module.exports = {
  submitSale,
};
