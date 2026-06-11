let express = require("express");
let route = express.Router();
const { getUsers, createUser } = require("../controllers/userController");
const { authMiddleware } = require("../middleware/authmiddleware");
const { register, login } = require("../controllers/authControllers");

route.get("/",authMiddleware,getUsers);
route.post("/register",register);
route.post("/login",login);

module.exports = route;