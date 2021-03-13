const mongoose = require('mongoose');

const Url = "mongodb+srv://dbuser:dbpass@cluster0.ahg4r.mongodb.net/seva?retryWrites=true&w=majority";

const connectDB = async() => {
    await mongoose.connect(Url, { useUnifiedTopology: true, useNewUrlParser: true });
    console.log("database connected !")
};

module.exports = connectDB;