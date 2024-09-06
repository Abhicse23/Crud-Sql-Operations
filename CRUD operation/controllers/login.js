const mysqlPool = require("../config/db");

const loginEmployee=async(req,res)=>{
    try{
        const{id,name}=req.body;
        if(!id||!name){
            return res.status(500).send({
                success:false,
                message:'Error Provide all fields'
            })
        }
    
        const data = await mysqlPool.query(`SELECT id,name FROM user WHERE id=? AND name=?`,[id,name])
        if(data[0].length===0){
            return res.status(401).send({
                success:false,
                message:"Wrong Credentials"
            })
        }
        res.status(201).send({
            success:true,
            message:'logged in successfully',
        })
        } catch (error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in Login',
            error
        })
    }
}

module.exports={loginEmployee}