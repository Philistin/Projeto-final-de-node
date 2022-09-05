
const Sequelize = require('sequelize')

const sequelize = new Sequelize('database', 'username', 'password', {
    host: './database.sqlite', // nome do bando de dados
    dialect: 'sqlite'   // o titpo de bando de dados nesse casos é sqlite
})

module.exports = sequelize


// link para consultar a codumentação do sequilize # Connecting to a database # Option 3:

// https://sequelize.org/docs/v6/getting-started/