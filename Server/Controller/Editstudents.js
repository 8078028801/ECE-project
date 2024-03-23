const student = require("./Studentsschema");


const updatestudents=async(req,res)=>{
    const { Name,
    Registernumber,
    Year,Mobilenumber}=req.body;
    const _id=req.params.id
    const students=await student.findByIdAndUpdate(_id,{Name,
        Registernumber,
        Year,Mobilenumber})
    res.json(students)
}
module.exports=updatestudents