const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    comment: String,
})


const Model = mongoose.model('usuarios', schema)

module.exports = Model