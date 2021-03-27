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
    img: {
        type: String,
        default: "https://res.cloudinary.com/drampnn2w/image/upload/v1615827809/Face-Profile-User-Man-Boy-Person-Avatar-512_ervo1s.png"
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    // location:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'location',
    // },
    role: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true
    },
    village: {
        type: String,
    },
    pincode: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('user', userSchema);