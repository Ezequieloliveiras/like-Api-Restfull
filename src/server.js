const express = require('express')
const cors = require('cors')

const db = require('./database/db')
const routes = require('./routes/routes')

const app = express()

db.connect()

const allowedOrigins = [
'http://localhost:3000'
]



// habilita cros
app.use(cors({
    origin: function(origin, callback) {
        let allowed = true

        if (!origin) allowed = true // aplicativo de celular

        if(!allowedOrigins.includes(origin)) allowed = false

        callback(null, allowed)
    }
}))

// habilita server para receber dados json
app.use(express.json())

// definindo rotas
app.use('/api', routes) // tudo que bater em api irá usar essas routes

// executando servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))