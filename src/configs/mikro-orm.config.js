const allEntities = require("../domain/models");
require('dotenv').config();
let mikroORMConfig = {
    entities: allEntities,
    type: "postgresql",
    dbName: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432'),
  };
module.exports = mikroORMConfig;