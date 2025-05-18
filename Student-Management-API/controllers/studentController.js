const { json } = require("express");
const student = require("../models/studentSchema");
const createStudent = async (req, res) => {
  const { id, name, age, Studentclass } = req.body;
  const newStudent = new student({
    id: id,
    name: name,
    age: age,
    Studentclass: Studentclass,
  });
  await newStudent.save();
  res.status(201).send("Student saved: " + JSON.stringify(newStudent));
};
const getStudents = async (req, res) => {
  const allStudent = await student.find();
  res.send(JSON.stringify(allStudent));
};
const getOneStudent = async (req, res) => {
  const id = req.params.id; // ✅ sax

  const oneStudent = await student.findOne({ id: id });
  if (oneStudent) {
    res.send(JSON.stringify(oneStudent));
  } else {
    res.send("student not get");
  }
};

const updateStudent = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const checkid = await student.findOne({ id: id });
  if (checkid) {
    await checkid.set(data);
    await checkid.save();
    res.send("student updated");
  } else {
    res.send("user not found");
  }
};

const deletOne = async (req, res) => {
  const id = req.params.id;
  const oneDelet = student.findOne({ id: id });
  if (oneDelet) {
    await oneDelet.deleteOne();

    res.send("user deleted");
  } else {
    res.send("user not found");
  }
};
module.exports = {
  createStudent,
  getStudents,
  getOneStudent,
  updateStudent,
  deletOne,
};
