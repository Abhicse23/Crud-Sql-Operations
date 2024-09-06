const express=require("express");
const morgan=require("morgan");
const dotenv =require("dotenv");
const mysqlPool = require("./config/db");


//configure dotenv
dotenv.config();

//rest object 
const app=express();

//middlewares
app.use(morgan("dev"));
app.use(express.json());

//routes
app.use("/api/v1/employe",require("./routes/employeRoutes"));

app.get('/test',(req,res)=>{
    res.status(200).send('<h1>nodejs mysql app')
})

//port
const PORT= process.env.PORT||8000;

//conditionaly listen
mysqlPool.query('SELECT 1').then(()=>{
    //MYSQL
    console.log("mysql db connected");
    //listen
    app.listen(PORT,()=>{
    console.log(`server running on port:${process.env.PORT}`);
});
})
.catch((error)=>{
    console.log(error);
});

