const express = require('express');
const category_controller = require("../controllers/categoryController")
const categoryRoute = express();

categoryRoute.use(express.json());

categoryRoute.post("/addCategory",category_controller.add_category)
categoryRoute.get("/categoryList",category_controller.view_category)


module.exports = categoryRoute;