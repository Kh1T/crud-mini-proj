const express = require("express");
const app = express();
const sequelize = require("./database/pgdb");
const TodoList = require("./models/todoModel");
const port = process.env.port || 3000;
const cors = require("cors");
app.use(cors());

app.use(express.json());

// console.log(sequelize);

app.delete("/todos/:id", async (req, res) => {
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
});

app.patch("/todos/:id", async (req, res) => {
  try {
    const getUser = await TodoList.findOne({
      where: {
        id: req.params.id * 1,
      },
    });

    getUser.set({
      title: "test",
      description: "update",
      email: "operation",
    });

    await getUser.save();

    res.status(200).json({
      status: "success",
      data: {
        getUser,
      },
    });
  } catch (err) {
    res.json({ err });
  }
});

app.post("/todos", async (req, res) => {
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
});

// Connecting to Database

(async () => {
  try {
    // await sequelize.sync({ force: true });
    console.log("Successfully Sync with postgresql");
  } catch (err) {
    console.log(err);
  }
})();

// Hosting Server

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
