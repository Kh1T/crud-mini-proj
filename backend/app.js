const express = require("express");
const app = express();
const TodoList = require("./models/todoModel");
const port = process.env.port || 3000;
const cors = require("cors");
app.use(cors());

app.use(express.json());

app.use(express.json());
let todos = [];
// console.log(sequelize);

//Get all todos
app.get("/api/todos", (req, res) => {
  res.json(todos);
  // res.send("Server is ready");
});

// Create a new todo
app.post('/api/todos', (req, res) => {
  const todo = req.body;
  console.log(todo)
  todos.push(todo);
  res.status(201).json(todo);
});

// Update an existing todo
app.put('/api/todos/:id', (req, res) => {
  const { id } = req.params;
  const updatedTodo = req.body;
  todos[id] = updatedTodo;
  res.json(updatedTodo);
});

// Delete a todo
app.delete('/api/todos/:id', (req, res) => {
  const { id } = req.params;
  todos.splice(id, 1);
  res.status(204).send();
});

app.post("/todos", async (req, res) => {
  const user = await TodoList.create(req.body);

  res.status(200).json({
    status: "success",
    data: { user },
  });
});

// Connecting to Database

(async () => {
  try {
    // await sequelize.sync();
    console.log("Successfully Sync with postgresql");
  } catch (err) {
    console.log(err);
  }
})();

// Hosting Server

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
