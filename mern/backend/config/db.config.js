const mongoose = require('mongoose')

module.exports.dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("Database Connected Successully.✅");
    } catch (error) {
        console.log("Database Connection Error.❌");
        process.exit(1)
    }
}