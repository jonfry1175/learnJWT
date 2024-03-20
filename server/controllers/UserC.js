const { User } = require('../models')

const {hash} = require('bcrypt')


const saltRounds = 5


class UserController {
    static async getUser(req, res) {
        try {
            const result = await User.findAll()
            res.status(200).json(result)
            
        } catch (error) {
            res.status(500).json(error.message)
            console.error(error.message)
        }
    }
    
    static async register(req, res) {
        try {
            const {username, password} = req.body
            const hashPassword = await hash(password, saltRounds)
            const result = await User.create({
                username, password : hashPassword
            })
            res.status(201).json(result)
            console.log(`password hash : ${result.password}`)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
}

module.exports = UserController