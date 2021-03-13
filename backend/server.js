const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require("./app/config/database");
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
const verifyToken = require("./app/middleware/validate-token");
const authRoutes = require("./app/routes/auth.js");
const userRoutes = require("./app/routes/user-logged");

const port = 5000


const app = express();
dotenv.config();
connectDB();

app.use(bodyParser.urlencoded({ extended: true })) // parse requests of content-type - application/x-www-form-urlencoded
app.use(cors())
app.use(bodyParser.json())
app.use(express.json()); // for body parser

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// public route anyone can access 
// route middlewares
app.use("/", authRoutes);

// admin route only logged in user can access
// this route is protected with token
app.use("/user", verifyToken, userRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})