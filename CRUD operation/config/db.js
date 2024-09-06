const mysql=require("mysql2/promise");

const mysqlPool=mysql.createPool({
    host:"119.18.58.248",
    user:"loopdarx_abhishektiwari",
    password:"328T~7{e2rwL",
    database:"loopdarx_testdbnode",
})

module.exports=mysqlPool;