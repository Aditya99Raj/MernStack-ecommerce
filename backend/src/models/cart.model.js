const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Types.ObjectId, ref: "user" },
  productId:{type:mongoose.Types.ObjectId,ref:'product'},
  category: {type:String,required:true}
},{
  timestamps:true,
});

module.exports = mongoose.model('cart',cartSchema);