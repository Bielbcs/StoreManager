const express = require('express');
const productController = require('../controllers/product.controller');
const nameValidation = require('../middlewares/nameValidation');
const productValidation = require('../middlewares/productExists');

const router = express.Router();

router.get('/:id', productValidation.productDidExist, productController.findById);

router.get('/', productController.findAll);

router.post('/', nameValidation, productController.submitProduct);

router.put('/:id', nameValidation,
  productValidation.productDidExist, productController.updateProduct);

router.delete('/:id', productValidation.productDidExist, productController.deleteProduct);
module.exports = router;
