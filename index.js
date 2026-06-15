require("dotenv").config();
let express = require('express');
const userRoute = require('./routes/userRoute');
let mongoose = require("mongoose");
const TasksRoute = require("./routes/tasksRoute");

let app = express();
app.use(express.json());

// Yeh ek test route hai, taaki check kar sako ki Vercel server chal raha hai
app.get("/", (req, res) => {
    res.send("Backend is working perfectly on Vercel!");
});

app.use("/users", userRoute);
app.use("/tasks", TasksRoute);

// Hardcoded string hata di, ab yeh dashboard wale MONGO_URI ko automatic pick karega
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Server is connected");
})
.catch((err) => {
    console.log("MongoDB connection Error: ", err);
});

module.exports = app;