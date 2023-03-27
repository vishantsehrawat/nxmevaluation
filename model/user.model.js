const mongoose = require("mongoose");
require("dotenv").config();

const connection = mongoose.connect(process.env.mongoUrl);


const userSchema = mongoose.Schema({
    name: {type : String},
    email: {type : String,unique:true},
    gender: {type : String},
    password: {type : String},
    age: {type : Number},
    city: {type : String},
    is_married: {type : Boolean},
    userId:{type:String}
})

const UserModel = mongoose.model("user",userSchema);

module.exports ={ connection,UserModel

}