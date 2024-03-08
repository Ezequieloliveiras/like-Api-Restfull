const UsersModel = require('../models/users')

async function get(req, res) {

    const { id } = req.params /// query , body = post ,?id=123

    // controla se vem id ou tudo na requisição
    const obj = id ? { _id: id } : null

    const usuarios = await UsersModel.find(obj)

    res.send(usuarios)
}

module.exports = {
    get,
}