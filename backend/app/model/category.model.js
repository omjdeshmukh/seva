const mongoose = require('mongoose');

var categorySchema = new mongoose.Schema({
    icon: {
        type: String,
        required: true
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