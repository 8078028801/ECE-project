const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const admin = require('./Userschema');

const sinup=async(req,res)=>{
  
    const {Name,Registernumber,Mobilenumber,Email,Password}=req.body;
 const useremail=await admin.findOne({Email})
 if(useremail){
    res.json("Already Exist")
 }
 else{
    const salt=await bcrypt.genSalt(10)
    const hashedpassword=await bcrypt.hash(Password,salt)
    const customerdetails=await admin.create({Name,Registernumber,Mobilenumber,Email,Password: hashedpassword})
    res.json({
        message: "User created successfully",
        Id:customerdetails._id,
       Name:customerdetails.Name,
       Registernumber:customerdetails.Registernumber,
       Mobilenumber:customerdetails.Mobilenumber,
        Email:customerdetails.Email,
        Password:customerdetails.Password,
        Token:tokengenerate(customerdetails._id)
    })
    
 }
 

}
const tokengenerate=(id)=>{
    return jwt.sign({id},process.env.secretkey,{
        expiresIn:'1d'
    })
 }
module.exports=sinup