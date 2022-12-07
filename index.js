const { Sequelize, DataTypes, Model } = require("sequelize");
const { startSequelize } = require("./models");
const { Todo } = require("./models/todo.model");
const dotenv = require("dotenv");

dotenv.config();

// Variables de entorno
DB_PASS = process.env.DB_PASS;
DB_USER = process.env.DB_USER;
DB_NAME = process.env.DB_NAME;

try {
    const sequelize = startSequelize(DB_NAME, DB_PASS, 'localhost', DB_USER);
    sequelize.authenticate().then(() => {
        console.log("connection is ok");

        return sequelize.sync({ force: true });
    }).then(async (value) => {
        // Para generar nuevas entradas
        const learnAPIDevelopment = Todo.build({
            description: "Learn API development"
        });
        const learnToSellYourAPIs = Todo.build({
            description: "Learn to sell your APIs"
        });
        const learnAPITS = Todo.build({
            description: "Learn API with TS"
        });
        console.log("DB has been synced!");
        // Guardar en la tabla
        await learnAPIDevelopment.save();
        await learnToSellYourAPIs.save();
        await learnAPITS.save();
    });
} catch (error) {
    console.log(error);
    process.abort();
}

// Este metodo crea la tabla sino existe, se llama despues que se establece la conección
// Person.sync();