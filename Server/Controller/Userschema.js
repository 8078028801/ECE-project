const mongoose = require("mongoose")
const adminschema=mongoose.Schema({
    Name:{type:String},
    Registernumber:{type:String},
    Mobilenumber:{type:String},
    Email:{type:String},
   Email:{type:String},
   Password:{type:String},

})
const admin=mongoose.model("admin",adminschema)
module.exports=admin
