// const students = require("./Studentsschema")

const student = require("./Studentsschema")

const getallstudents=async(req,res)=>{
    const getallstudents=await student.find()
    res.json(getallstudents)
}
module.exports=getallstudents