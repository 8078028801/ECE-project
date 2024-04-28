// const students = require("./Studentsschema");

const student = require("./Studentsschema");



const Createstudents=async(req,res)=>{
    const {Name,
        Registernumber,
        Year,Mobilenumber,CGPA}=req.body;
    const Userdetails=await student.create({
        Name,
        Registernumber,
        Year,Mobilenumber,CGPA
    })
    res.json(Userdetails)
}


module.exports= Createstudents