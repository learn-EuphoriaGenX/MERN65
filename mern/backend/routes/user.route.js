const express = require('express')
const { register, login, profile } = require('../controllers/user.controllers')
const { auth } = require('../middlewares/auth.middleware')
const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.get('/profile', auth, profile)


module.exports = router