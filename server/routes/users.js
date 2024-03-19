const userRoute = require('express').Router()
const {UserController} = require('../controllers')

userRoute.get('/', UserController.getUser)
userRoute.post('/register', UserController.register)


module.exports = userRoute