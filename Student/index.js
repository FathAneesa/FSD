const express=require("express")
require("./connection")
var stdmodel=require("./models/student")
var cors=require("cors")

const app=express()

//mid
app.use(express.json())
app.use(cors())


app.get('/', (req, res) => {
    res.send('Hello jjjjjjj ')
  })

//add api
app.post("/addd",async(req,res)=> {
try {
    await stdmodel(req.body).save()
    res.send("data added")
} catch (error) {
    console.log(error)
    
    
}

})

//view api
app.get("/vieww",async(req,res)=>{
    try {
        const data =await stdmodel.find()
        res.send(data)
    } catch (error) {
        console.log(error)
        
    }
})

//delete
app.delete("/removee/:id",async(req,res)=>{
    try {
        await stdmodel.findByIdAndDelete(req.params.id)
        res.send("data deleted")
    } catch (error) {
        console.log(error)
        
    }
})

//update
app.put("/updatee/:id",async(req,res)=>{
    try {
        await stdmodel.findByIdAndUpdate(req.params.id,req.body)
        res.send("data updated ")
    } catch (error) {
        console.log(error)
        
    }
})

app.listen(3005,()=>{
    console.log("port is running at 3005")
})

