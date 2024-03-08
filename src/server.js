const express = require('express')
//const path = require('path')

const db = require('./database/db')
const routes = require('./routes/routes')

const app = express()

db.connect()

// habilita server para receber dados via post (formulário) 
app.use(express.urlencoded({extended: true }))


// definindo rotas
app.use('/api', routes) // tudo que bater em api irá usar essas routes

// executando servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))