const express = require("express");
const {connection} = require("./model/user.model");
const userRouter = require("./routes/user.route")
const postRouter = require("./routes/post.route")
const authMiddleware =require("./middlewares/authMiddleware")
require("dotenv").config();
const port = process.env.port ||3000;
const app = express();

app.use(express.json());
app.use("/users",userRouter);
app.use(authMiddleware);
app.use("/posts",postRouter);


app.listen(port,async ()=>{
    
    try {
        await connection;
        console.log("connected to db")
        console.log(`server started at ${port}`)
    } catch (error) {
        console.log(error)
    }
})