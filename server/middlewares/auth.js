const { tokenVerifier } = require('../helpers')

const authentication = async (req, res, next) => {
    // console.log("midlleware auth is runnning")
    try {
        const { access_token } = await req.headers

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
        res.status(401).json(error.message)
    }
}

module.exports = authentication