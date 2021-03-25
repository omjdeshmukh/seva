const mongoose = require('mongoose');

var serviceSchema = new mongoose.Schema({
    image: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    serviceNames: {
        type: String,
        required: true
    },
    serviceEmail: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category',
        required: true
    },
    contactNo: {
        type: String,
        required: true
    },
    map_location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    servicePincode: {
        type: String,
        required: true
    },
    isVerify: {
        type: String,
        default: false
    },
});

module.exports = mongoose.model('service', serviceSchema);