const mongoose = require('mongoose');

const url="mongodb://0.0.0.0:27017/persondb"
//mongodb://0.0.0.0:27017/

const con=mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

con.then(()=>
{
    console.log(result)
    console.log("connection successful")
}).catch((err)=>
{
    console.error(err)
})

//models   class/object

const personSchema=new mongoose.Schema({
    name:String,
    gender:String,
    mobile:{type:String,unique:true},
    email:{type:String,unique:true},
    password:{type:String},

})

const PersonModel=mongoose.model("person",personSchema)

module.exports={PersonModel}

