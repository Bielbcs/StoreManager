const express = require('express');
const salesController = require('../controllers/sale.controller');

const router = express.Router();

router.post('/', salesController.submitSale);

module.exports = router;