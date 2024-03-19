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
}

module.exports = UserController