const mongoose = require("mongoose");

const connect = () =>
  mongoose.connect(
    "mongodb://127.0.0.1:27017",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  );

  module.exports = connect;
