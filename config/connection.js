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
      host: '127.0.0.1',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;