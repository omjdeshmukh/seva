const mongoose = require('mongoose');

var suggestionSchema = new mongoose.Schema({
    ServiceType: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category',
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    ServicePinCode: {
        type: String,
        required: true
    },
    ServiceDescription: {
        type: String,
        required: true
    },
    voteCount: {
        type: String,
        required: true
    },
    isVaild: {
        type: String,
        default: true
    },
});

module.exports = mongoose.model('suggestion', suggestionSchema);