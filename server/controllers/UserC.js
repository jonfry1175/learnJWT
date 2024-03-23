const { User, Role } = require('../models')

const { encryptPassword, decryptPassword } = require('../helpers')

const { tokenGenerator, tokenVerifier } = require("../helpers")

class UserController {
    static async getUser(req, res) {
        try {
            const result = await User.findAll({
                include: [Role],
                order: [['id', 'ASC']]
            })
            res.status(200).json(result)

        } catch (error) {
            res.status(500).json(error.message)
            console.error(error.message)
        }
    }

    static async register(req, res) {
        try {
            const { username, password } = req.body
            const hashPassword = await encryptPassword(password)
            const result = await User.create({
                username, password: hashPassword, roleId: 1
            })
            res.status(201).json(result)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    static async login(req, res) {
        try {
            const { username, password } = req.body;

            // Get user data by username
            const usernameFound = await User.findOne({ where: { username } });

            // Check if user exists
            if (!usernameFound) {
                return res.status(401).json({ message: `Incorrect username !` });
            }

            //generate token
            // const accesToken = tokenGenerator({ usernameFound })
            const accesToken = tokenGenerator(usernameFound.id, usernameFound.username, usernameFound.roleId);


            const verifyToken = tokenVerifier(accesToken)
            // console.log(verifyToken)

            // Check if password is valid
            const isPasswordValid = await decryptPassword(password, usernameFound.password);

            // true = return token to client
            isPasswordValid ? res.status(200).json({ accesToken }) : res.status(401).json({
                message: `Incorrect Password!`
            })


        } catch (error) {
            res.status(500).json(error.message);
        }
    }



}

module.exports = UserController