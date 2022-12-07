const { Model, DataTypes } = require("sequelize");
const { sequelize } = require(".");
// const { sequelize } = require("./index");
// Definir los modelos 1ra forma
// const Person = sequelize.define('Person', {
//     firstName:{
//         type:DataTypes.STRING,
//         allowNull:false
//     },
//     lastName: {
//         type:DataTypes.STRING
//     }

// })

// Definir los modelos 2da forma
const initPersonModel = (sequelize) => {
    class Person extends Model { }

    Person.init({
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING
        }
    }, {
        name: 'Person',
        sequelize
    })
}

module.exports = initPersonModel;