module.exports.register = (req, res) => {
    return res.send({ message: "This is register Route", success: true })
}
module.exports.login = (req, res) => {
    return res.send({ message: "This is login Route", success: true })
}
module.exports.profile = (req, res) => {
    return res.send({ message: "This is profile Route", success: true })
}