const mongoose = require("mongoose");
const wishlistSchema = new mongoose.Schema({
  userId: [{ type: Schema.Types.ObjectId, ref: "user" }],
  category:{type:String,requied:false}
});

const wishlist = mongoose.model("wishlist",wishlistSchema);
module.exports = wishlist;