let express = require("express");
const { getTasks, createTask, updateTask, deleteTask } = require("../controllers/taskController");
let route = express.Router();

route.get("/",getTasks);
route.post("/",createTask);
route.put("/:id",updateTask);
route.delete("/:id",deleteTask);

module.exports = route;