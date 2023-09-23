const express = require('express')
const router = express.Router()

//controller functions
const userController = require('../Controllers/UserController')

router.post('/login',userController.loginUser)

router.post('/signup', userController.signupUser)

module.exports = router;