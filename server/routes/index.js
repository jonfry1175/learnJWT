const route = require('express').Router()

route.get('/', (req, res) => {
    res.send("route index index")
})

const userRoute = require('./users')
route.use(userRoute)

module.exports = route