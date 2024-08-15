const express = require("express");
const userController = require('./controllers/userController')
const app = express();
const TodoList = require("./models/todoModel");
const port = process.env.port || 3000;
const cors = require("cors");
const router = express.Router();


app.use(cors());

app.use(express.json());

app.delete("/todos/:id", userController.deleteUser);
app.patch("/todos/:id", userController.updateUser);
app.post("/todos", userController.createUser);

app.post("/todos", async (req, res) => {
  console.log(req.body);
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

// Get one todo by pk
app.get("/todos/:pk", async (req, res) => {
  const { pk } = req.params;
  try {
    const todoItem = await TodoList.findByPk(`${pk}`);
    if (todoItem === null) {
      console.log("Not found!");
    } else {
      console.log(todoItem instanceof TodoList); // true
      res.json({
        todoItem,
      });
    }
  } catch (err) {
    console.log(err);
  }
});

// Get all todos
app.get("/todos", async (req, res) => {
  try {
    const todoAll = await TodoList.findAll();
    console.log(todoAll);
    res.json({ todoAll });
  } catch (err) {
    console.log(err);
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
