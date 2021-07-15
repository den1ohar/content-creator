const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.MYSQL_DB || "cc_db",
  process.env.MYSQL_USER || "root",
  process.env.MYSQL_PASSWORD || "root",
  {
    dialect: "mysql",
    host: process.env.MYSQL_HOST || "localhost",
    port: process.env.MYSQL_PORT || 3306,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

export default sequelize;
