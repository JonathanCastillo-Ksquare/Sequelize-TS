const { Model, DataTypes } = require("sequelize");

class Todo extends Model { };

const initTodoModel = (sequelize) => {
    Todo.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        description: DataTypes.STRING,
        is_completed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
        sequelize,
        // Para hacer un soft delete
        // paranoid: true
    })
}



module.exports = {
    initTodoModel,
    Todo
};