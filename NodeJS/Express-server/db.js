const mysql=require("mysql2")

const getConnection=()=>{
  
    return con= mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Pass@123",
    database:"persondb"
  });
    
  
  };
module.exports={getConnection} ; 


