class UserController {
    static async getUser(req, res) {
        res.send("user controller")
    }
}

module.exports = UserController