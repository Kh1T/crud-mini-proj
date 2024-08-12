const express = require("express");
const app = express();
const sequelize = require("./database/pgdb");
const port = process.env.port || 3000;

// console.log(sequelize);

app.get("/", (req, res) => {
  res.send("Server is ready");
});

// Connecting to Database

(async () => {
  try {
    await sequelize.sync();
    console.log("Successfully Sync with postgresql");
  } catch (err) {
    console.log(err);
  }
})();

// Hosting Server

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
