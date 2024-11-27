// const express=require("express")
// const router=express.Router()
// const mysql=require("mysql2")
// const path=require("path")
// const basePath=path.join(process.cwd(),"pages")
// const {getConnection}=require("../db")

// router.get('/', function (req, res) {
//     res.sendFile(path.join(basePath,"login.html"))
//   })

// //   router.post('/', function (req, res) {
// //     res.sendFile(path.join(basePath,"login.html"))
// //   })
// router.post('/registeration', function (req, res) {
//     const data=req.body
//     // console.log(data)
//     try{
//     const c=getConnection() //get connection object
//   c.connect(function(err){
//       if(err) throw err
//       console.log("Connection Successful...")
//       const sql = `insert into person (name,mobile,password,email,gender) 
//       values (
//       '${data.name}',
//       '${data.contact}',
//       '${data.password}',
//       '${data.email}',
//       '${data.gender}')`
//       c.query(sql,function(err,result){
//         if(err)throw err
//         if(result.affectedRows==1){   
           
//         console.log("inserted..")
//        res.json({affectedRows:result.affectedRows,msg:"Person registered"})
//         }
//         else{
//           res.json({affectedRows:0,affectedRows,msg:"Person not registered"})
//           console.log("not inserted...")
//         }
//       })
//   })
  
//     res.sendFile(path.join(basePath,"registeration.html"))
    
//   }catch(err){
//     res.sendFile(path.join(basePath,"registeration.html"))
//   }
//   })
// console.log(module)
// module.exports=router
// console.log(module)

const express = require("express");
const router = express.Router();
const mysql = require("mysql2");
const path = require("path");
const basePath = path.join(process.cwd(), "pages");
const {getConnection}  = require("../db");

// Route to serve the login page
router.get('/', (req, res) => {
    res.sendFile(path.join(basePath, "registeration.html"));
});

// Route to handle user registration
router.post('/', async (req, res) => {
    const data = req.body;
    console.log(data);
    try {
        const connection = getConnection(); // Get connection pool
        const sql = `INSERT INTO person (name, mobile, password, email, gender) values('${data.name}', '${data.contact}', '${data.gender}', '${data.email}', '${data.password}');`;

        // Use parameterized query to prevent SQL injection
        // const values = [data.name, data.contact, data.password, data.email, data.gender]

        connection.query(sql, (err, result) => {
            if (err) {
                console.error("Error inserting into database:", err);
                res.status(500).json({ affectedRows: 0, msg: "Error registering person" });
                return;
            }

            if (result.affectedRows === 1) {
                console.log("Person registered successfully.");
                res.json({ affectedRows: result.affectedRows, msg: "Person registered successfully" });
            } else {
                console.log("Person not registered.");
                res.json({ affectedRows: 0, msg: "Person not registered" });
            }
        });
    } catch (err) {
        console.error("Unexpected error:", err);
        res.status(500).json({ affectedRows: 0, msg: "Unexpected error occurred" });
    }
});

module.exports = router;
