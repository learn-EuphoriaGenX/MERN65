const mongoose = require('mongoose')

let orderSchema = new mongoose.Schema({
    cart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cart',
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    price: {
        type: Number,
    },
    reciept: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'cancelled'],
        default: 'pending'
    },
    paymentMode: {
        type: String,
        enum: ['COD', 'RAZORPAY'],
        default: 'COD'
    }
}, { timestamps: true })
module.exports = mongoose.model('Order', orderSchema)
