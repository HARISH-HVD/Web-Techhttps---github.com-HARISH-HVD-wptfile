const express = require("express")
const path = require('path')
const mysql = require('mysql2')

const router = express.Router()
const {getConnection} = require("../db")

const basePath = path.join(process.cwd(), "pages") 

router.get('/', function (req, res) {
    res.sendFile(path.join(basePath, "login.html"))
})

router.post('/', function (req, res) {
    const data = req.body
    const sql = `select * from person where email = '${data.email}' and password = '${data.password}'`;

    // res.sendFile(path.join(basePath,"login.html"))

    try {
        const con = getConnection()

        con.connect(function (error) {
            if (error) throw error
            console.log("Connection Success")

            con.query(sql, function (err, result) {
                if (err) throw err
                console.log(result)
                if (result.length == 1) {
                    console.log("login...")

                    res.json({ login: true, msg: "Person logged in", person: result[0] })
                }
                else {
                    res.json({ login: false, msg: "Person not logged in" })
                    console.log("not...")

                }
            })
        })

    }
    catch (err) {
        res.sendFile(path.join(basePath, "login.html"))

    }

})



module.exports = router



// const express = require('express');
// const { pool } = require('../db');
// const path = require('path');

// const router = express.Router();
// const basePath = path.join(__dirname, "../pages");

// // Serve login page
// router.get('/', (req, res) => res.sendFile(path.join(basePath, "login.html")));

// // Handle login
// router.post('/', (req, res) => {
//     const { email, password } = req.body;

//     const sql = `SELECT * FROM person WHERE email = ? AND password = ?`;
//     const values = [email, password];

//     pool.query(sql, values, (err, results) => {
//         if (err) {
//             console.error("Database error:", err);
//             return res.status(500).json({ success: false, msg: "Login failed" });
//         }

//         if (results.length > 0) {
//             return res.json({ success: true, msg: "Login successful", user: results[0] });
//         } else {
//             return res.status(401).json({ success: false, msg: "Invalid email or password" });
//         }
//     });
// });

// module.exports = router;
