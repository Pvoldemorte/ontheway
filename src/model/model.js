const { default: mongoose } = require("mongoose")

const {schemaCustomer} = require("../mongoDB/mongoose")


const customerModel = mongoose.model("admin/customerDatas",schemaCustomer)
module.exports = {customerModel};