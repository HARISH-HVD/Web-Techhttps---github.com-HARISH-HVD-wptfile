const mongo = require('mongodb');
const MongoClient=mongo.MongoClient

const url="mongodb://0.0.0.0:27017/"
//mongodb://0.0.0.0:27017/

const client=new MongoClient(url)

const database=client.db("persondb")

const personCollection=database.collection("person")
const employeeCollection=database.collection("employee")

module.exports={personCollection,employeeCollection,database}