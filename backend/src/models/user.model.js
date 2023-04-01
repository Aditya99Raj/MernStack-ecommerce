const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    image:{type:String,required:false},
    phoneNo:{type:Number,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true}
},{
    timestamps:true,
});

module.exports = mongoose.model('user',userSchema);