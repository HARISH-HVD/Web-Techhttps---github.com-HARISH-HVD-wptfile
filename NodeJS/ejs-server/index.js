const { name } = require("ejs")
const express = require("express")

const app = express()

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("home", { name: "LIC-Zindagi ke saath bhi Zindagi ke baad bhi...." })
})

app.get("/list", (req, res) => {
    const guests = [
        {
            name: "Pratham",
            mobile: "7418529635"
        },
        {
            name: "Thor",
            mobile: "852741963"
        },
        {
            name: "Hulk",
            mobile: "9638527415"
        },
    ]
    res.render("welcome",{guests})
})

app.listen(3000, "localhost", () => {
    console.log("http://localhost:3000")
})