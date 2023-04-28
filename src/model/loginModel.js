const mongoose = require('mongoose');

const schemaLogin = new mongoose.Schema({
    username : {
        type : String,
        require : true
    },
    password : {
        type : String,
        require :true
    }
})

module.exports = mongoose.model("admin/loginDatas",schemaLogin)