const mongoose = require('mongoose')

let cartSchema = new mongoose.Schema({
    product: {
        id: { type: Number, unique: true, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true }
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    price: {
        type: Number,
    },

}, { timestamps: true })
module.exports = mongoose.model('Cart', cartSchema)
