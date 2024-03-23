const mongoose = require("mongoose")
const studentsschema=mongoose.Schema({
    Name:{type:String},
   Registernumber:{type:String},
   Year:{type:String},
   Mobilenumber:{type:String}
  
})
const student=mongoose.model("students",studentsschema)
module.exports=student