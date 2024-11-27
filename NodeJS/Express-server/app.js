const express = require('express')
const path = require('path')
const cors=require("cors") //allows cross origin to the accept the request
const bodyParser=require("body-parser") //body parser stores json data in the body property
const mysql=require("mysql2")
const app = express()
const loginRouter=require("./routers/login")  //  ./ means current folder.
const registerRouter=require("./routers/register")

//middleware 

app.use(cors())
app.use(bodyParser.json())//middleware
app.use("/login",loginRouter)
app.use("/registeration",registerRouter)

module.exports=app

const basePath=path.join(__dirname,"pages")  //__dirname gives current folder path
// process.cwd() will give project path. 



app.get('/', function (req, res) {
  res.sendFile(path.join(basePath,"index.html"))
})
app.get('/about', function (req, res) {
  res.sendFile(path.join(basePath,"about.html"))
})
app.get('/contact', function (req, res) {
  res.sendFile(path.join(basePath,"contact.html"))
})

app.post('/login', function (req, res) {
  res.sendFile(path.join(basePath,"login.html"))
})
app.get('/registeration', function (req, res) {
  res.sendFile(path.join(basePath,"registeration.html"))
})
// app.post('/registeration', function (req, res) {
//   const data=req.body
//   // console.log(data)
//   try{
//   const c=getConnection() //get connection object
// c.connect(function(err){
//     if(err) throw err
//     console.log("Connection Successful...")
//     const sql = `insert into person (name,mobile,password,email,gender) 
//     values (
//     '${data.name}',
//     '${data.contact}',
//     '${data.password}',
//     '${data.email}',
//     '${data.gender}')`
//     c.query(sql,function(err,result){
//       if(err)throw err
//       if(result.affectedRows==1){   
         
//       console.log("inserted..")
//      res.json({affectedRows:result.affectedRows,msg:"Person registered"})
//       }
//       else{
//         res.json({affectedRows:0,affectedRows,msg:"Person not registered"})
//         console.log("not inserted...")
//       }
//     })
// })

//   res.sendFile(path.join(basePath,"registeration.html"))
// }catch(err){
//   res.sendFile(path.join(basePath,"registeration.html"))
// }
// })
app.get('/*', function (req, res) {
  res.sendFile(path.join(basePath,"404page.html"))
})

app.listen(3000,"localhost",()=>{
    console.log("http//localhost:3000")
})
