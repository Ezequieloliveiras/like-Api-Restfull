const mongoose = require('mongoose')

function connect() {

    mongoose.connect('mongodb+srv://dbaura:jnmw6B4WlnLyZS7Z@cluster0.lpzhuto.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

    const db = mongoose.connection

    db.once('open', () => {
        console.log('Connected to database!')
    })

    db.on('error', console.error.bind(console, 'connection error: '))

}

module.exports = {
    connect
}