const Sequelize = require("sequelize");

const sequelize = new Sequelize("postgres", "postgres", "khit", {
  host: "localhost",
  dialect: "postgres",
});


module.exports = sequelize;
