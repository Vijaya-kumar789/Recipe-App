const mongoose = require('mongoose');

//create a schema for User
const userSchema = new mongoose.Schema({
    userName :{
        type:String,
        required:true,
    } ,
    email:{
        type:String,
        required:true,
    } ,
    passwordHash : {
        type:String,
        required:true,
    } ,
    role :{
        type:String,
        default:"user"
    },
},
{ timestamps: true }
);

module.exports = mongoose.model("User" , userSchema, "users");