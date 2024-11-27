const path=require("path")
const fs=require("fs")

console.log(__dirname)
// D:\WebTech\NODEJS\fs-module

console.log(process.cwd())  //cwd() current work directory
// D:\WebTech\NODEJS\fs-module


const filePath=path.join(__dirname,"files","profile.txt")
console.log(filePath)

const data=fs.readFileSync(filePath,"utf-8")
console.log(data)

// PS D:\WebTech\NODEJS\fs-module>