const mongoos = require("mongoose");
const connectionDb = require("../config/database");
const studentScheme = mongoos.Schema({
  id: Number,
  name: String,
  age: Number,
  Studentclass: String,
});

const student = connectionDb.model("student", studentScheme);
module.exports = student;
