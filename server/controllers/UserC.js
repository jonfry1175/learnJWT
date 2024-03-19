const { User } = require('../models')



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
            const result = await User.create({
                username, password
            })

            res.status(201).json(result)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
}

module.exports = UserController