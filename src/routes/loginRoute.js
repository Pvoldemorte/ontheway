const express = require('express');
const login_controller = require("../controllers/loginController")
const loginRoute = express();

loginRoute.use(express.json());


loginRoute.post("/login",login_controller)

module.exports = loginRoute;