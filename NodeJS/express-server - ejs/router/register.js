const express = require("express")
const path = require('path')
const mysql = require('mysql2')

const router = express.Router()
const { getConnection } = require("../db")

const basePath = path.join(process.cwd(), "pages")

const { personCollection } = require("../mongoDb")

const {employeeCollection}=require("../mongoDb")

const {PersonModel}=require("../mongooseDb")

router.get('/', function (req, res) {
  res.sendFile(path.join(basePath, "register.html"))
})

// router.post('/', function (req, res) {
//   const data = req.body
//   console.log(data)
//   try {
//     const con = getConnection();

//     con.connect(function (error) {
//       if (error) throw error
//       console.log("Connection Success")

//       const sql = `insert into person (name, mobile, gender, email, password) 
//     values('${data.name}', '${data.mobile}', '${data.gender}', '${data.email}', '${data.password}');`

//       con.query(sql, function (err, result) {
//         console.log(result)
//         if (err) throw err
//         if (result.affectedRows == 1) {
//           console.log("inserted...")

//           res.json({ affectedRows: result.affectedRows, msg: "Person registered" })
//           // console.log(result)
//         }
//         else {
//           res.json({ affectedRows: 0, msg: "Person not registered" })
//           console.log("not inserted...")

//         }
//         // console.log("Inserted")
//         // console.log(result)
//       })
//     })
//     // res.sendFile(path.join(basePath, "register.html"))
//   }
//   catch (err) {
//     res.sendFile(path.join(basePath, "register.html"))
//     console.error(err)
//   }
// })



//mongodb connection

// router.post('/', async function (req, res) {
//   const personData = req.body
//   // console.log(data)
//   try {
//     const savedPerson = await personCollection.insertOne(personData)

//     console.log(savedPerson)
//     res.json({ msg: "person registered" })

//     // if (err) throw err
//     // if (result.affectedRows == 1) {
//     //   console.log("inserted...")

//     //   res.json({ affectedRows: result.affectedRows, msg: "Person registered" })
//     //   // console.log(result)
//     // }
//     // else {
//     //   res.json({ affectedRows: 0, msg: "Person not registered" })
//     //   console.log("not inserted...")

//     // }
//     // console.log("Inserted")
//     // console.log(result)


//   }
//   catch (err) {
//     console.error(err)
//     res.json({ msg: "Error is registered" })
//   }
// })

// router.post('/', async function (req, res) {
//   const employeeData = req.body
//   // console.log(data)
//   try {
//     const savedEmployee = await employeeCollection.insertOne(employeeData)

//     console.log(savedEmployee)
//     res.json({ msg: "Employee registered" })

//     // if (err) throw err
//     // if (result.affectedRows == 1) {
//     //   console.log("inserted...")

//     //   res.json({ affectedRows: result.affectedRows, msg: "Person registered" })
//     //   // console.log(result)
//     // }
//     // else {
//     //   res.json({ affectedRows: 0, msg: "Person not registered" })
//     //   console.log("not inserted...")

//     // }
//     // console.log("Inserted")
//     // console.log(result)


//   }
//   catch (err) {
//     console.error(err)
//     res.json({ msg: "Error is registered" })
//   }
// })



//mongoose connection

router.post('/', async function (req, res) {
  const personData = req.body
  // console.log(data)
  try {

    const person=new PersonModel(personData)

    const savedPerson = await person.save()

    console.log(savedPerson)

    if (savedPerson) {
      console.log("inserted...")
      res.json({ affectedRows: 1, msg: "Person registered" })
    }
    else {
      res.json({ affectedRows: 0, msg: "Person not registered" })
      console.log("not inserted...")

    }
  }
  catch (err) {
    console.error(err)
    res.json({ msg: "Error is registered" })
  }
})


module.exports = router

