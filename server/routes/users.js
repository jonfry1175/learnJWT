const userRoute = require('express').Router()
const {UserController} = require('../controllers')

userRoute.get('/', UserController.getUser)


module.exports = userRoute