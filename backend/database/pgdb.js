const Sequelize = require("sequelize");

const sequelize = new Sequelize("ToList", "postgres", "1", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
