const Category = require("../model/categoryModel")

const add_category = async(req,res)=>{
    try {
        const category = new Category({
            category:req.body.category,
            description : req.body.description
        })

        const cat_data = await category.save();
        res.status(200).send({success:true,message:"Category Data",data:[cat_data]})
    } catch (error) {
        res.status(400).send({success:false,message:error.message})
    }
}

const view_category = async(req,res)=>{
    try {
        const category = await Category.find();
        res.status(200).send({success:true,message:"Category Data",data:category})
    } catch (error) {
        res.status(400).send({success:false,message:error.message})
    }
   
}

module.exports = {add_category,view_category}; 