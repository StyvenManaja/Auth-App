const express = require('express')
const userController = require('../controllers/user.controller')

const router = express.Router()

router.post('/signup', userController.createUser)
router.post('/signin', userController.logUserIn)

module.exports = router