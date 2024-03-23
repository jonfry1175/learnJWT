const jwt = require('jsonwebtoken')
require('dotenv').config();


const secretCode = process.env.SECRET_CODE || 'secretCode'

const tokenGenerator = (id, username, roleId) => {
    return jwt.sign({
        id, username, roleId
    }, secretCode)
}

const tokenVerifier = (data) => {
    return jwt.verify(data, secretCode)
}

module.exports = {
    tokenGenerator,
    tokenVerifier
}