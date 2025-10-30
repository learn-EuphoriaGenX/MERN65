const express = require('express')
const app = express() // express class's object instantiate
const { dbConnection } = require('./config/db.config')

app.use(express.json()) // middleware to parse json body
app.use(express.urlencoded({ extended: true })) // middleware to parse urlencoded body

app.get("/", (req, res) => {
    return res.send("Hello From Backend.")
})

const userRoutes = require('./routes/user.route')
app.use("/user", userRoutes)
const cartRoutes = require('./routes/cart.routes')
app.use("/cart", cartRoutes)
const orderRoutes = require('./routes/order.routes')
app.use("/order", orderRoutes)


dbConnection()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Server is running on port " + process.env.PORT + "✅");
        })
    })