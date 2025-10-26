const express = require('express')
const app = express() // express class's object instantiate


app.get("/", (req, res) => {
    return res.send("Hello From Backend.")
})

const userRoutes = require('./routes/user.route')
app.use("/user", userRoutes)
const cartRoutes = require('./routes/cart.routes')
app.use("/cart", cartRoutes)
const orderRoutes = require('./routes/order.routes')
app.use("/order", orderRoutes)


const port = 5000
app.listen(port, () => {
    console.log("Server is running on port " + port);
})