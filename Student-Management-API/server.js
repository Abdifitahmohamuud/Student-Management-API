// app.js
const express = require("express");
const routes = require("./routes/studentRoutes"); // hubi wadada saxda ah
const app = express();

app.use(express.json());

// Prefix: "/students"
app.use("/students", routes);
app.get("/", (req, res) => {
  res.send("welcome");
});
app.listen(3000, () => {
  console.log("App listening on port 3000");
});
