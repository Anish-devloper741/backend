let User = require("../models/user");


let getUsers = async (req,res)=>{
    let data = await User.find();
    res.json(data);
}

let createUser = async (req,res)=>{
    let {FullName,Email,Password,PhoneNumber}=req.body;

    let newUser = await User.create({
        FullName,
        Email,
        Password,
        PhoneNumber
    })


    res.status(201).json({
        message : "Login Successfull",
        data : newUser
    })

}


module.exports = {getUsers,createUser};