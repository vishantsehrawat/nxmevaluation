const express = require("express");
const { UserModel } = require("../model/user.model");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const userRouter = express();
userRouter.use(express.json());

// post route for user

userRouter.post("/register", async(req,res)=>{

    var {name,email,gender, password,age,city,is_married}= req.body;
    try {
        bcrypt.hash(password, 5, function(err, hash) {
            // Store hash in your password DB.
            password=hash;
        });
        const olduser = await  UserModel.findOne({email:email});
        console.log(olduser);
        if(olduser){
            res.status(200).send({msg:"User already exist, please login"})
        }
        else{
            const user = new UserModel({name,email,gender, password,age,city,is_married})
            await user.save();
        res.status(200).send({msg:"new User added "})
        }
    } catch (error) {
        console.log(error)
        res.status(400).send({msg:"cannot add new user"})
    }
})

// for user login
userRouter.post("/login", async(req,res)=>{
    const {email,password} = req.body;
    try {
        const user = await UserModel.findOne({email})
        console.log(user);
        if(user){
            bcrypt.compare(password, user.password, function(err, result) {
                if(result){
                    const token = jwt.sign({ userId:user._id }, 'masai');
                    res.status(200).send({msg:"Login Successfull",token:token})
                }
                else{
                    res.status(400).send({msg:"Login Failed!"})
                    
                }
            });
        }
        else{
            res.status(400).send({msg:"User not Found"})
        }
    } catch (error) {
        console.log(error); 
    }
})


module.exports = userRouter
