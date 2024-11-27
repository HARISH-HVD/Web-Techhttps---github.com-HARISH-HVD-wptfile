const express = require('express')
const path = require('path')
const cors = require('cors')
const mysql = require('mysql2')
const bodyParser = require('body-parser')
const app = express()
const loginRouter = require("./router/login")  // ./ means current folder
const registerRouter = require("./router/register")  // ./ means current folder
// const {getConnect} = require("./db")

app.use(cors()) //middleware
app.use(bodyParser.json())
app.use("/login", loginRouter)
app.use("/register", registerRouter)

const basePath = path.join(__dirname, "pages")

app.get('/', function (req, res) {
  res.sendFile(path.join(basePath, "index.html"))
})
app.get('/about', function (req, res) {
  res.sendFile(path.join(basePath, "about.html"))
})
app.get('/contact', function (req, res) {
  res.sendFile(path.join(basePath, "contact.html"))
})

// app.get('/welcome', function (req, res) {
//   res.sendFile(path.join(basePath, "welcome.html"))
//   const data = req.body
//   const sql = select * from person;

//   try {
//     const con = getConnect()

//     con.connect(function (error) {
//       if (error) throw error
//       console.log("Connection Success")

//       con.query(sql, function (err, result) {
//         if (err) throw err
//         if (result.length == 1) {
//           console.log("Welcome...")

//           res.json({ login: true, msg: "Data fetched", person: result })
//         }
//         else {
//           res.json({ login: false, msg: "Data not fetched" })
//           loginconsole.log("No welcome...")

//         }
//       })
//     })

//   }
//   catch (err) {
//     res.sendFile(path.join(basePath, "login.html"))

//   }
// })
app.get('/*', function (req, res) {
  res.sendFile(path.join(basePath, "404page.html"))
})

app.listen(8000, "localhost", () => {
  console.log("http://localhost:8000")
})  