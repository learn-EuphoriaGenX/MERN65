const mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username Required"],
    },
    email: {
        type: String,
        required: [true, "Email Required"],
        unique: [true, "Email already exists"]
    },
    password: {
        type: String,
        required: [true, "Password Required"],
    },
    mobile: {
        type: String,
        unique: [true, "Mobile number already exists"]
    },
    address: { type: String },
}, { timestamps: true })
module.exports = mongoose.model('User', userSchema)
