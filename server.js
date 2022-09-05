const express = require('express')

const app = express()


// importar o banco de dados
const sequelize = require('./config/db')


// importar o aquivo routes.js
const Router = require('./routes')


// usando json no app
app.use(express.json())


// conexão com sequilize
sequelize.sync().then(() => {
    console.log('banco de dados conectado com sucesso!')
})

// usando as rotas do arquivo routes.js
app.use('/tasks', Router)


app.listen(5000,()=> console.log('servidor rodando na porta 5000'))