const express=require('express')
const { getEmployee,getEmployeeByID,createEmployee, updateEmployee, deleteEmployee} = require('../controllers/employeController');
const { loginEmployee } = require('../controllers/login');

//router object
const router=express.Router()

//routes

//GET ALL EMPLOYEE LIST||GET
router.get("/getall",getEmployee);

//GET EMPLOYEE BY ID
router.get("/get/:id",getEmployeeByID);

//Create NEW EMPLOYEE ID
router.post("/create",createEmployee);

//UPDATE EMPLOYEE
router.put("/update/:id",updateEmployee)

//DELETE EMPLOYEE || DELETE
router.delete("/delete/:id",deleteEmployee)

//log in
router.post("/login",loginEmployee)


module.exports=router