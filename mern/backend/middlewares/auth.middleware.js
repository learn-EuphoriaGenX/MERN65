let jwt = require('jsonwebtoken')

module.exports.auth = (req, res, next) => {
    try {
        let token = req.headers?.authorization
        if (!token) {
            res.status(400).json({ message: 'Invalid or Empty Token', success: false })
        }
        let decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded
        next();
    } catch (error) {
        console.log(error);
        
        res.status(400).json({ message: 'Token not valid', success: false })
    }
}