const express = require('express');
const salesController = require('../controllers/sale.controller');
const salesValidation = require('../middlewares/salesValidation');

const router = express.Router();

router.post('/', salesValidation.validate, salesValidation.validateProductId,
   salesController.submitSale);

router.get('/', salesController.listAllSales);

module.exports = router;