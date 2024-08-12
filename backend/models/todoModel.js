const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const TodoList = sequelize.define("TODOLIST", {
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
