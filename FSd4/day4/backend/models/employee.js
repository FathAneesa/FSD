const mongoose=require("mongoose")

var schema = mongoose.Schema(
    {
        Name:String,
        Age:Number,
        Dept:String,
        Sal:Number
    }
)

var employeemodel=mongoose.model("kmctemployee",schema)
module.exports=employeemodel