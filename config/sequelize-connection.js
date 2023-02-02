const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const baseName = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + 'db-config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) sequelize = new Sequelize(process.env[config.use_env_variable], config)
else sequelize = new Sequelize(config.database, config.username, config.password, config);

fs.readdirSync(__dirname).filter(file => { console.log(file); }).forEach(file => {console.log(file)});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;