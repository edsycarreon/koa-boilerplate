"use strict";
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    host: process.env.PG_HOST,
    port: parseInt(process.env.PG_PORT),
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
});
module.exports = pool;
