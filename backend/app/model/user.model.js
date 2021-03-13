const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        min: 6,
        max: 255,
    },
    fullName: {
        type: String,
        required: true,
        min: 6,
        max: 255,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    location:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'location',
    },
    role: {
        type: String,
        default: "user"
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('user', userSchema);