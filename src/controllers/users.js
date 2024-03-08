const UsersModel = require('../models/users')

async function get(req, res) {

    const { id } = req.params /// query , body = post ,?id=123

    // controla se vem id ou tudo na requisição
    const obj = id ? { _id: id } : null

    const usuarios = await UsersModel.find(obj)

    res.send(usuarios)
}

async function post(req,res){
    const {
        comment,
    } = req.body // vou receber do req.body pq e post

    const register = new UsersModel({
        comment,
    })

    register.save()

    res.send({
        message: 'success'
    })
}

module.exports = {
    get,
    post,
}