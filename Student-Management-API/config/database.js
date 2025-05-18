const mongoos = require("mongoose")
const connectionDB = mongoos.createConnection("mongodb://localhost:27017/SchoolDB")

module.exports=connectionDB;