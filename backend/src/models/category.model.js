const mongoose  = require("mongoose");
const products = require("./product.model");

const categorySchema = new mongoose.Schema({
    category:{type:Schema,required:true},
    gender:{type:String,required:false},
    products:[products]
})

module.exports = mongoose.model("category", categorySchema);