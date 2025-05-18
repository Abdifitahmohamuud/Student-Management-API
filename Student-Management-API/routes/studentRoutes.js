// route/myroute.js
const express = require("express");
const router = express.Router();
const studentControler = require("../controllers/studentController");
router.get("/", studentControler.getStudents);

router.post("/", studentControler.createStudent);

router.get("/:id", studentControler.getOneStudent);

router.put("/:id", studentControler.updateStudent);

router.delete("/:id", studentControler.deletOne);
module.exports = router;
