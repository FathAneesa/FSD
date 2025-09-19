const express=require("express")
require("./connection")
var empmodel=require("./models/employee")
var cors=require("cors")

const app=express()

//mid
app.use(express.json())
app.use(cors())


app.get('/', (req, res) => {
    res.send('Hello World')
  })

//add api
app.post("/add",async(req,res)=> {
try {
    await empmodel(req.body).save()
    res.send("data added")
} catch (error) {
    console.log(error)
    
    
}

})

//view api
app.get("/view",async(req,res)=>{
    try {
        const data =await empmodel.find()
        res.send(data)
    } catch (error) {
        console.log(error)
        
    }
})

//delete
app.delete("/remove/:id",async(req,res)=>{
    try {
        await empmodel.findByIdAndDelete(req.params.id)
        res.send("data deleted")
    } catch (error) {
        console.log(error)
        
    }
})

//update
app.put("/update/:id",async(req,res)=>{
    try {
        await empmodel.findByIdAndUpdate(req.params.id,req.body)
        res.send("data updated ")
    } catch (error) {
        console.log(error)
        
    }
})

app.listen(3004,()=>{
    console.log("port is running at 3004")
})

