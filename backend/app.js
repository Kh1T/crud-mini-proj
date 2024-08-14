const express = require("express");
const app = express();
const TodoList = require("./models/todoModel");
const port = process.env.port || 3000;
const cors = require("cors");
app.use(cors());

app.use(express.json());

// console.log(sequelize);

app.get("/", (req, res) => {
  res.send("Server is ready");
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
