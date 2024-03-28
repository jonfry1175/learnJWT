const { tokenVerifier } = require('../helpers')

const authentication = async (req, res, next) => {
    console.log("midlleware auth is runnning")
    try {
        const access_token  = req.headers.access_token
        console.log(access_token)

        if(!access_token) {
            return res.status(404).json({message: "Acces token not found"})
        }

        const verifyToken = tokenVerifier(access_token)
        if (verifyToken) {
            next()
        } else {
            return res.status(401).json({ message: "Unauthorized" })
        }
    } catch (error) {
        res.status(401).json("invalid token")
    }
}

module.exports = authentication