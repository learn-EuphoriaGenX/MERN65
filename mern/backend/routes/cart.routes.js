const express = require('express')
const { addToCart, deleteCart, deleteCartItems, updateCartItem, viewCartItems } = require('../controllers/cart.controllers')
const { auth } = require('../middlewares/auth.middleware')
const router = express.Router()

router.post('/add-to-cart/:pid', auth, addToCart)
router.patch('/update/:id', auth, updateCartItem)
router.get('/all', auth, viewCartItems)
router.delete('/delete/:id', auth, deleteCartItems)
router.delete('/all/delete/', auth, deleteCart)

module.exports = router