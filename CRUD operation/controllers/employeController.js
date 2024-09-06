const mysqlPool = require("../config/db")

//GET ALL EMPLOYEE LIST
const getEmployee=async(req,res)=>{
    try{
      const data=await mysqlPool.query("SELECT * FROM user")
      if(!data){
        return res.status(404).send({
            success:false,
            message:'no Records found'
        })
      }
      res.status(200).send({
        success:true,
        message:"ALL EMPLOYEEE DATA",
        totalEmploye:data[0].length,
        data:data[0],
      })
    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:'error in GET ALL student API',
            error
        })
    }
}

//GET EMPLOYEE BY ID
const getEmployeeByID=async(req,res)=>{
    try{
        const employeID=req.params.id
        
        if(!employeID){
            return res.status(404).send({
                success:false,
                message:'Invalid Or Provide employee id'

            });
            
        }
        
        const data=await mysqlPool.query(`SELECT * FROM user where id=?`,[employeID])
        console.log("hii3");
        if(!data){
            return res.status(404).send({
                success:false,
                message:"no records found"
            })
        }
        console.log("hii4");
        res.status(200).send({
            success:true,
            EmployeeDetail:data[0],
        })
    } catch (error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in get employee by id API',
            error
        })
    }
}

//create new employee 
const createEmployee=async(req,res)=>{
    try{
        const{id,name,position,salary}=req.body;
        if(!id||!name||!position||!salary){
            return res.status(500).send({
                success:false,
                message:'Error Provide all fields'
            })
        }
        const data = await mysqlPool.query(`INSERT INTO user (id,name,position,salary) VALUES (?,?,?,?)`,[id,name,position,salary])
        if(!data){
            return res.status(404).send({
                success:false,
                message:"Error in INSERT QUERY"
            })
        }

        res.status(201).send({
            success:true,
            message:'new Employee Records Created',
        })
        } catch (error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in Creating Employee API',
            error
        })
    }
}

//UPDATE EMPLOYEE
const updateEmployee=async(req,res)=>{
    try{
        const employeeID=req.params.id;
        if(!employeeID){
            return res.status(404).send({
                success:false,
                message:'Invalid ID or provide id'
            })
        }
    
    const {id,name,position,salary}=req.body;
    const data=await mysqlPool.query(`UPDATE user SET name=?,position=?,salary=? WHERE id=?`,[name,position,salary,employeeID])
    if(!data){
        return res.status(500).send({
            success:false,
            message:"Error In Update Data",
        });
    }
    res.status(200).send({
        success:true,
        message:"Student Details Updated",
    });
    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error in update Student API",
            error
        });
    }
};

//DELETE EMPLOYEE
const deleteEmployee=async(req,res)=>{
    try{
    const EmployeeID=req.params.id
    if(!EmployeeID){
        return res.status(404).send({
            success:false,
            message:"please Provide Student ID or Valid Emmployee ID"
        }) 
    }
    await mysqlPool.query('DELETE FROM user WHERE id=?',[EmployeeID])
    res.status(200).send({
        success:true,
        message:'Employee Deleted Successfully',
    });
    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error In Delete Student API',
            error
        })
    }
}


module.exports={getEmployee,getEmployeeByID,createEmployee,updateEmployee,deleteEmployee};