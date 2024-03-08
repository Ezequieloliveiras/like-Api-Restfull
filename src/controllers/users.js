const UsersModel = require('../models/users')

async function get(req, res) {

    const { id } = req.params /// query , body = post ,?id=123

    // controla se vem id ou tudo na requisição
    const obj = id ? { _id: id } : null

    const usuarios = await UsersModel.find(obj)

    res.send(usuarios)
}

async function post(req, res) {
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

async function put(req, res) {
    const { id } = req.params

    const user = await UsersModel.findOneAndUpdate({ _id: id }, req.body, { new: true }) // procura o id, o body e atualiza

    res.send({
        message: 'success',
        user,
    })

    // FORMA DE FAZER 1

    // const user = await UsersModel.findOne({ _id: id})

    // await user.updateOne(req.body) // vai atualizar tudo

    // res.send({
    //     message: 'success',
    //     user,
    // })
}


module.exports = {
    get,
    post,
    put,
}