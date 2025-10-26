const express = require('express')
const { addToCart, deleteFromCart } = require('../controllers/cart.controllers')
const router = express.Router()

router.get('/add-to-cart', addToCart)
router.get('/delete', deleteFromCart)

module.exports = router