// const students = require("./Studentsschema");

const student = require("./Studentsschema");



const Createstudents=async(req,res)=>{
    const {Name,
        Registernumber,
        Year,Mobilenumber}=req.body;
    const Userdetails=await student.create({
        Name,
        Registernumber,
        Year,Mobilenumber
    })
    res.json(Userdetails)
}


module.exports= Createstudents