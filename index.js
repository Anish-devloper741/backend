require("dotenv").config();
let express = require('express');
const  userRoute  = require('./routes/userRoute');
let mongoose = require("mongoose");
const TasksRoute = require("./routes/tasksRoute");
let app = express();
app.use(express.json());
app.use("/users",userRoute);
app.use("/tasks",TasksRoute);

mongoose.connect("mongodb://anishjatu9_db_user:anish541@ac-a9xrc0t-shard-00-00.my7zcqj.mongodb.net:27017,ac-a9xrc0t-shard-00-01.my7zcqj.mongodb.net:27017,ac-a9xrc0t-shard-00-02.my7zcqj.mongodb.net:27017/Users?ssl=true&replicaSet=atlas-yqp4gk-shard-0&authSource=admin&appName=Cluster0")
.then(()=>{
    console.log("Server is connected");
app.listen(5000,()=>{
    console.log(`http://localhost:5000`);
    
})
})
.catch((err)=>{
    console.log(err);
})
