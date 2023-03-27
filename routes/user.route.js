const express = require("express");
const { UserModel } = require("../model/user.model");

const userRouter = express();
userRouter.use(express.json());

// post route for user

userRouter.post("/register", async(req,res)=>{

    const {name,email,gender, password,age,city,is_married}= req.body;
    try {
        const user = new UserModel({name,email,gender, password,age,city,is_married})
        await user.save();
    } catch (error) {
        console.log(error)
    }
})



module.exports = userRouter
