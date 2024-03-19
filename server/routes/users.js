const userRoute = require('express').Router()
const {userController} = require('../controllers')

userRoute.get('/getUser', userController.getUser)


module.exports = userRoute