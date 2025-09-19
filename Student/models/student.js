const mongoose=require("mongoose")

var schema = mongoose.Schema(
    {
        Name:String,
        Age:Number,
        Course:String,
        Department:String
    }
)

var stdmodel=mongoose.model("student",schema)
module.exports=stdmodel