const { Model, DataTypes } = require('sequelize');



// importar o banco de dados
const sequelize = require('../config/db')

class Tasks extends Model { }

Tasks.init({

    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    done: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {

    sequelize,
    modelName: 'tasks'
});

module.exports = Tasks

// link para consultar a codumentação do sequilize # Extending Model

// https://sequelize.org/docs/v6/core-concepts/model-basics/