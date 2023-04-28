const Login = require("../model/loginModel");

const adminLogin = async(req,res)=>{
    try {
        if(req.body.username && req.body.password){
            const data = await Login.findOne(req.body).select("-password")
            if(data){
                res.send(data);
            }else{
                res.send({result:" No User Found"})
            }
    
        }else{
            res.send({result:" No User Found"})
        }
        
    } catch (error) {
        res.status(400).send({
            success : false,
            message : error.message
        })
    }
}

module.exports = adminLogin;