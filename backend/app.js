const express = require("express");
const userController = require("./controllers/userController");
const app = express();
const TodoList = require("./models/todoModel");
const port = process.env.port || 3000;
const cors = require("cors");
const router = express.Router();

app.use(cors());
app.use(express.json());



app.delete("/todos/:id", userController.deleteUser);
app.patch("/todos/:id", userController.updateUser);
app.get("/todos", userController.getAllUser);
app.post("/todos", userController.createUser);

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
