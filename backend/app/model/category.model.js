const mongoose = require('mongoose');

var categorySchema = new mongoose.Schema({
    icon: {
        type: String,
        required: true
        //https://raw.githubusercontent.com/omjdeshmukh/seva/main/demo.png?token=AHT44ZFI435X3WB4KHO3BUTAJTNSY
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
});

module.exports = mongoose.model('category', categorySchema);