const mongoose = require("mongoose");

const connect = () =>
  mongoose.connect(process.env.MONGO_URI,
//      {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//   }
  );

  module.exports = connect;
