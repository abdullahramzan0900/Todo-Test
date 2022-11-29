const express=require("express");
const dotenv=require("dotenv");
const colors=require("colors")
const morgan=require("morgan");
const path=require("path");
const todoRoute=require("./routes/Todo")
const cors=require("cors");

const connectTDB=require(`./config/db`);
const { application } = require("express");
dotenv.config({
    path:`./env`
})
connectTDB();
const app=express();
app.use(express.json());

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

if(process.env.MODE==='development')
{
    app.use(morgan('dev'));
}
const PORT=process.env.PORT || 5000;
app.use(`/api/task`,todoRoute)

app.get('/',(req,res)=>{
  res.send("app is running good");
})
app.listen(PORT,console.log(`server is running on post ${PORT}`.yellow.bold));










