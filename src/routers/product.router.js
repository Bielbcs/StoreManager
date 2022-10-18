const express = require('express');
const productController = require('../controllers/product.controller');
const nameValidation = require('../middlewares/nameValidation');

const router = express.Router();

router.get('/:id', productController.findById);

router.get('/', productController.findAll);

router.post('/', nameValidation, productController.submitProduct);

module.exports = router;
