const express = require("express");
const cors = require("cors");
const connect = require("./config/db");
const dotenv = require('dotenv');

dotenv.config()
const app = express();
app.use(express.json()); // for parsing the body;
app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);

const port = process.env.PORT || 8006;

app.get("/", (req, res) => {});

app.listen(port, async () => {
  await connect();
  console.log("running on port:", port);
});
