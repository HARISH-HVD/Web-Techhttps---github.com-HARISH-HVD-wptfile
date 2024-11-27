const express=require("express")
const router=express.Router()
const mysql=require("mysql2")
const path=require("path")
const basePath=path.join(process.cwd(),"pages")
const {getConnection}=require("../db")

router.get('/', function (req, res) {
    res.sendFile(path.join(basePath,"login.html"))
  })

//   router.post('/', function (req, res) {
//     res.sendFile(path.join(basePath,"login.html"))
//   })
router.post('/registeration', function (req, res) {
  const data=req.body
  // console.log(data)
  try{
  const c=getConnection() //get connection object
c.connect(function(err){
    if(err) throw err
    console.log("Connection Successful...")
    const sql = `insert into person (name,mobile,password,email,gender) 
    values (
    '${data.name}',
    '${data.contact}',
    '${data.password}',
    '${data.email}',
    '${data.gender}')`
    c.query(sql,function(err,result){
      if(err)throw err
      if(result.affectedRows==1){   
         
      console.log("inserted..")
     res.json({affectedRows:result.affectedRows,msg:"Person registered"})
      }
      else{
        res.json({affectedRows:0,affectedRows,msg:"Person not registered"})
        console.log("not inserted...")
      }
    })
})

  // res.sendFile(path.join(basePath,"registeration.html"))
}catch(err){
  res.sendFile(path.join(basePath,"registeration.html"))
}
})
// console.log(module)
module.exports=router
// console.log(module)
