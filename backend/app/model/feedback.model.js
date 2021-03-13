const mongoose = require('mongoose');

var feedbackSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    feedback: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('feedback', feedbackSchema);