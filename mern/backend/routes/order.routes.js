const express = require('express')
const { createOrder, viewOrders } = require('../controllers/order.controllers')
const router = express.Router()

router.get('/create', createOrder)
router.get('/view', viewOrders)

module.exports = router