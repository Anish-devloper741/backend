let mongoose = require("mongoose");
let taskSchema = new mongoose.Schema({
    title : String,
    description : String,
})

module.exports = mongoose.model("Tasks",taskSchema);