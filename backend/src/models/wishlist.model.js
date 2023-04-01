const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema({
  userId: [{ type: Schema.Types.ObjectId, ref: "user" }],
  category:{type:String,requied:false}
});

module.exports = mongoose.model("wishlist", wishlistSchema);