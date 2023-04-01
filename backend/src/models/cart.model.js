const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Types.ObjectId, ref: "User" },
  productId:{type:mongoose.Types.ObjectId,ref:'product'},
  category: {type:String,required:true}
});

module.exports = mongoose.model('cart',cartSchema);