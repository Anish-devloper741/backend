let Task = require("../models/tasks");


let getTasks = async (req,res)=>{
    let data = await Task.find();
    res.json(data);
}

let createTask = async (req,res)=>{
    let{title,description}=req.body;

    let task = await Task.create({
        title,
        description
    })

    res.json(task);
}

let updateTask = async (req,res)=>{
    let{id} = req.params
    let{title,description}=req.body;
    let update = await Task.findByIdAndUpdate(id,{
        title,
        description
    })

    res.json(update);
}

let deleteTask = async (req,res)=>{
    let {id} = req.params
    let deleted = await Task.findByIdAndDelete(id);
    res.json(deleted);
}

module.exports = {getTasks,createTask,updateTask,deleteTask};