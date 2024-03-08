const mongoose = require('mongoose')

function connect() {

    mongoose.connect('mongodb+srv://quielonliner:dzV6CMbeUUVPDQbE@cluster0.8yjlvsa.mongodb.net/authapp')

    const db = mongoose.connection

    db.once('open', () => {
        console.log('Connected to database!')
    })

    db.on('error', console.error.bind(console, 'connection error: '))

}

module.exports = {
    connect
}