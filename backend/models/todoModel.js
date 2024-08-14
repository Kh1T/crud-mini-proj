const { DataTypes } = require("sequelize");
const sequelize = require("../database/pgdb");

const TodoList = sequelize.define("todolist", {
  title: {
    type: DataTypes.STRING,
    require: true,
  },
  description: {
    type: DataTypes.STRING,
    require: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = TodoList;
