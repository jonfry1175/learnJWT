const userRoute = require('express').Router()
const {UserController} = require('../controllers')

userRoute.get('/getUser', UserController.getUser)


module.exports = userRoute