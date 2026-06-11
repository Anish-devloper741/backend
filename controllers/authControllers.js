let User = require("../models/user");
let bcrypt = require("bcryptjs");
let jwt = require("jsonwebtoken");
let JWT_SECRET = "trd7r6tyug"

exports.register =async(req,res)=>{

  try{
    let {FullName,Email,Password,PhoneNumber}=req.body;

    let existing = await User.findOne({Email});

    if(existing) return res.status(400).json({message:"User already Exists"});

    let hashedPassword = await bcrypt.hash(Password,10);
    let user = await User.create({FullName,Email,Password:hashedPassword,PhoneNumber});
    res.status(201).json({message:"Registered Successfully",userId:user._id});

  }catch(err){
    res.json(err);
  }
}

exports.login = async (req,res)=>{
  try{
  let{Email,Password} = req.body;

  let user = await User.findOne({Email});

  if(!user) return res.status(404).json({message:"User not found"});

  let isMatch = await bcrypt.compare(Password,user.Password);
  if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });


  let token = jwt.sign({id:user._id},JWT_SECRET)
  res.json({ message: "Login successful", token });
    } catch (err) {
      res.status(500).json({ error: err.message });
    } 
}