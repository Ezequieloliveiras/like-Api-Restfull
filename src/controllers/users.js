const UsersModel = require('../models/users')

async function get(req, res) {

const users = await UsersModel.find()


    res.send({users})
}

module.exports = {
    get,
}