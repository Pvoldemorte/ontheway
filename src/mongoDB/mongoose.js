const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/ontheway");



const schemaCustomer = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email :{
        type : String
    },
    contactNo : {
        type : Number,
        required : true
    },
    address : {
        type : String,
        postelCode : String,
        required : true
    },
    shopNo : {
        type : Number
    }


})

module.exports = {schemaCustomer};