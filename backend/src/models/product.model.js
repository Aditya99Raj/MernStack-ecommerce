const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  image: { type: String, required: true },
  price:{type:String,required:true},
  description: { type: String, required: false },
  ratings: {type:Number,required:false},
  sellCount: {type:Number,required:false},
  newArrival: {type:Boolean,default:false},
  size: {type:String,enum:['S','M','L','XL'],default:'M'},
  discountedPrice: {type:String,required:false},
  inventory: {type:Number,required:false},
});

const products = mongoose.model("product",productSchema)
module.exports = products;