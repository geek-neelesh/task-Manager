const express=require("express");
const app=express();
const routes=require("./routers/task");
const connectDb=require('./db/connect');

app.use(express.json());

const start =async()=>{
    await connectDb();
}
start();

app.use(express.static("./public"))
app.use("/main/v1/tasks",routes);




 

const port=3000;
app.listen(port,console.log(`listening to port ${port}`));
app.get('/main',connectDb,(req,res)=>{
        res.send("Task Manager");
        console.log("connected successfully")
    })










 

