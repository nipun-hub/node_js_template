// src/config/sequelize.config.js
require('dotenv').config();

module.exports = {
    development: {
        username: process.env.PG_USER,
        password: process.env.PG_PASS,
        database: process.env.PG_DB,
        host: process.env.PG_HOST,
        port: process.env.PG_PORT,
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true, // Require SSL
                rejectUnauthorized: false, // Allow self-signed certificates
            },
        },
    },
    test: {
        username: process.env.PG_USER,
        password: process.env.PG_PASS,
        database: `${process.env.PG_DB}_test`,
        host: process.env.PG_HOST,
        port: process.env.PG_PORT,
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
    },
    production: {
        username: process.env.PG_USER,
        password: process.env.PG_PASS,
        database: process.env.PG_DB,
        host: process.env.PG_HOST,
        port: process.env.PG_PORT,
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
    },
};