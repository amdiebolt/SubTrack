const Sequelize = require('sequelize')
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  
  sequelize = new Sequelize(
    process.env.DB_NAME.trim(),
    process.env.DB_USER.trim(),
    process.env.DB_PASSWORD.trim(),
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3301
    }
  );
}

module.exports = sequelize;