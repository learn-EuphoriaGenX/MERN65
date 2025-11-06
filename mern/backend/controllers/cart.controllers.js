let Cart = require('../models/cart.model')
module.exports.addToCart = async (req, res) => {
    try {
        let pid = req.params.pid;
        let userId = req.user.id;

        let existingCartItem = await Cart.findOne({ "product.id": pid, user: userId });
        if (existingCartItem) {
            existingCartItem.product.quantity += 1;
            await existingCartItem.save();
            return res.status(200).send({ message: "Cart updated successfully", success: true, cartItem: existingCartItem })
        }

        let newCartItem = new Cart({
            product: {
                id: pid,
                quantity: 1
            },
            user: userId
        })
        newCartItem.save()
        return res.status(200).send({ message: "Item add to Cart successfully", success: true, cartItem: newCartItem })
    } catch (error) {
        return res.status(500).send({ message: "Internal Server Error", success: false })
    }
}

module.exports.updateCartItem = async (req, res) => {
    try {
        id = req.params.id;
        let { quantity } = req.body;
        let cartItem = await Cart.findById(id);
        if (!cartItem) {
            return res.status(404).send({ message: "Cart Item not found", success: false })
        }
        cartItem.product.quantity = quantity;
        await cartItem.save();
        return res.status(200).send({ message: "Cart updated successfully", success: true, cartItem })
    } catch (error) {
        return res.status(500).send({ message: "Internal Server Error", success: false })
    }
}

module.exports.viewCartItems = async (req, res) => {
    try {
        let userId = req.user.id;
        let cartItems = await Cart.find({ user: userId });
        return res.status(200).send({ message: "Cart Items fetched successfully", success: true, cartItems })
    } catch (error) {
        return res.status(500).send({ message: "Internal Server Error", success: false })
    }
}

module.exports.deleteCartItems = async (req, res) => {
    try {
        id = req.params.id;
        let cartItem = await Cart.findByIdAndDelete(id);
        return res.status(200).send({ message: "Cart Item deleted successfully", success: true, cartItem })
    } catch (error) {
        return res.status(500).send({ message: "Internal Server Error", success: false })
    }
}

    module.exports.deleteCart = async(req, res) => {
        try {
            userId = req.user.id;
            let cartItems = await Cart.deleteMany({ user: userId });
            return res.status(200).json({ message: "All Cart Items deleted successfully", success: true, cartItems })
        } catch (error) {
            console.log(error);

            return res.status(500).json({ message: "Internal Server Error11", success: false })
        }
    }