const express = require("express");
const cors = require("cors");
const connect = require("./config/db");
const dotenv = require('dotenv');

const port = process.env.PORT || 8006;

const userRoutes = require('./routes/user.routes');
const cartRoutes = require('./routes/cart.routes')

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

app.get("/users", userRoutes);
app.post("/users",userRoutes);

app.get("/cart",cartRoutes);
app.post("/cart",cartRoutes);

app.listen(port, async () => {
  await connect();
  console.log("running on port:", port);
});
