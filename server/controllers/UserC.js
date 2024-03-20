const { User } = require('../models')

const { hash, compare } = require('bcrypt')


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
            const { username, password } = req.body
            const hashPassword = await hash(password, saltRounds)
            const result = await User.create({
                username, password: hashPassword
            })
            // console.log(`password hash : ${result.password}`)
            res.status(201).json(result)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    static async login(req, res) {
        try {
            const { username, password } = req.body;
    
            // Get user data by username
            const user = await User.findOne({ where: { username } });
    
            // Check if user exists
            if (!user) {
                return res.status(401).json({ message: `Incorrect email or password` });
            }
    
            // Check if password is valid
            const isPasswordValid = await compare(password, user.password);
            
            if (isPasswordValid) {
                res.status(200).json({ message: `Login successful!` });
            } else {
                res.status(401).json({ message: `Incorrect email or password` });
            }
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
    
}

module.exports = UserController