const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require("./app/config/database");
const bodyParser = require('body-parser');
const dotenv = require("dotenv");

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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})