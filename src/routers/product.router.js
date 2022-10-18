const express = require('express');
const productController = require('../controllers/product.controller');

const router = express.Router();

router.get('/:id', productController.findById);

router.get('/', productController.findAll);

// router.get('/', async (req, res) => { 
//   const result = await listProducts();
//   return result;
// });
module.exports = router;
