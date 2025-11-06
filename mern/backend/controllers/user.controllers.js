let User = require('../models/user.model')
let jwt = require('jsonwebtoken')

module.exports.register = async (req, res) => {
    let { username, email, password } = req.body
    if (!username || !email || !password) {
        return res.status(400).send({ message: "All fields are required", success: false })
    } else {
        try {
            let existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).send({ message: "User already exists!", success: false })
            }

            let newUser = await User.insertOne({
                username, email, password
            })

            return res.status(200).send({ message: "User Registration Successfull", success: true, user: newUser })


        } catch (error) {
            return res.status(500).send({ message: "Internal Server Error", success: false })
        }
    }
}
module.exports.login = async (req, res) => {
    let { email, password } = req.body
    if (!email || !password) {
        return res.status(400).send({ message: "All fields are required", success: false })
    } else {
        try {
            let existingUser = await User.findOne({ email, password });
            if (!existingUser) {
                return res.status(400).send({ message: "User does'nt exists!", success: false })
            }


            let data = {
                id: existingUser._id,
                email: existingUser.email,
                username: existingUser.username,
                mobile: existingUser.mobile,
            }

            let token = jwt.sign(data, process.env.SECRET_KEY, {
                expiresIn: '1d'
            })

            return res.status(200).send({ message: "User Login Successfull", success: true, user: existingUser, token })

        } catch (error) {
            return res.status(500).send({ message: "Internal Server Error", success: false })
        }
    }
}
module.exports.profile = (req, res) => {
    return res.send({ message: "This is profile Route", success: true })
}