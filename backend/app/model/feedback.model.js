const mongoose = require('mongoose');

var feedbackSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    feedback: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('feedback', feedbackSchema);