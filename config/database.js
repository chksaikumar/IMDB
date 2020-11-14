const Sequelize = require("sequelize");
module.exports = new Sequelize("milestone9", "postgres", "Kumar$1997", {
  host: "localhost",
  dialect: "postgres",

  pool: {
    max: 5,
    min: 0,
    acquire: 3000,
    idle: 10000,
  },
});
