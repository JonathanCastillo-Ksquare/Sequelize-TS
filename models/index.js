// Usando URI de conexión
// const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASS}@localhost:5432/${DB_NAME}`);

const { Sequelize } = require("sequelize");
const personModel = require("./person.model");
const { initTodoModel } = require("./todo.model");

let sequelize;

const models = [personModel, initTodoModel];

const startSequelize = (dbName, dbPass, dbHostname, dbUser) => {
    sequelize = new Sequelize(dbName, dbUser, dbPass, {
        dialect: 'postgres',
        host: dbHostname
    });

    for (const initModel of models) {
        initModel(sequelize);
    }

    return sequelize;
}

module.exports = {
    sequelize,
    startSequelize
}