const mongoose =require("mongoose")

mongoose.connect('mongodb+srv://user:aneesa@cluster0.nqa23ev.mongodb.net/book?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected!'))
  .catch((err)=>console.log(err))

