const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://Pahan:<password>@cluster.xc1zirc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})

const newSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection =mongoose.model("collection",newSchema)

module.exports= collection