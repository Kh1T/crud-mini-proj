const { where } = require("sequelize");
const TodoList = require("../models/todoModel");

exports.createUser = async (req, res) => {
  try {
    const user = await TodoList.create(req.body);
    res.status(200).json({
      status: "success",
      data: { user },
    });
  } catch (err) {
    res.json({
      err,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    console.log(req.params.id);
    const getUser = await TodoList.findOne({
      where: {
        id: req.params.id * 1,
      },
    });
    // await getUser.set(req.body).save();
    await getUser.update(req.body, {
      where: { id: req.params.id * 1 },
    });

    res.status(200).json({
      status: "success",
      data: {
        getUser,
      },
    });
  } catch (err) {
    res.json({ err });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const delUser = await TodoList.destroy({
      where: {
        id: req.params.id * 1,
      },
    });
    res.status(200).json({
      status: "success",
      delUser,
    });
  } catch (err) {
    console.log(err);
    res.json({ err });
  }
};

exports.getAllUser = async (req, res) => {
  try {
    const todoAll = await TodoList.findAll();
    console.log(todoAll);
    res.json({ todoAll });
  } catch (err) {
    console.log(err);
    res.json({ err });
  }
};
