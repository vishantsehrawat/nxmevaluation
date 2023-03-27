const express = require("express");
const {connection} = require("./model/user.model");
require("dotenv").config();
const port = process.env.port ||3000;
const app = express();

app.use(express.json());



app.listen(port,async ()=>{
    
    try {
        await connection;
        console.log("connected to db")
        console.log(`server started at ${port}`)
    } catch (error) {
        console.log(error)
    }
})