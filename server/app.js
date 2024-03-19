const express = require('express')
const app = express()
const port = 3012
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

const route = require('./routes')
app.use("/api", route)

app.listen(port, () => {
    console.log(`API is running on port ${port}`)
})