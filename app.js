const express = require("express");
const {customerModel} = require("./src/model/model")

const app = express();

app.use(express.json());



app.post("/customer/add", async(req,res)=>{
    let data = new customerModel(req.body);
    const result = await data.save();
    res.send(result)
})

app.get("/customer/view", async(req,res)=>{
    let data = await customerModel.find();
    res.send(data)
})

// login_routes

const login_routes = require("./src/routes/loginRoute")
app.use("/api",login_routes)

// category_routes 
const category_routes = require("./src/routes/categoryRoute")
app.use("/api",category_routes)
app.listen(process.env.PORT || 8080)