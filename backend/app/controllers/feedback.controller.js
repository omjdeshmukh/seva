const Feedback = require('../model/feedback.model');
const User = require('../model/user.model');

exports.create = (req, res) => {

    // creat a notes
    const feedback = new Feedback({
        user: req.user.id,
        feedback: req.body.feedback
    });
    feedback.save()
        .then(data => {
            Feedback.populate(feedback, {path: "user"})
            .then(Feedback => {
                res.json({
                    message: "feedback added",
                    Feedback
                 });
            })
            //res.send(feedback);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while"
            });
        });
};



exports.findAll = (req, res) => {

    Feedback.find()
        .populate("user") 
        .then(feedback => {
            res.send(feedback);
            //console.log(feedback);

        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while"
            });
        });
};


exports.findMyFeedback = (req, res) => {

    Feedback.find({ user: req.params.Id})
        .populate("user") 
        .then(feedback => {
            res.send(feedback);
            //console.log(feedback);

        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while"
            });
        });
};


exports.findOne = (req, res) => {
    Feedback.findById(req.params.Id)
        .populate("user")
        .then(feedback => {
            if (!feedback) {
                return res.status(404).send({
                    message: "feedback not found with id " + req.params.Id
                });
            }
            res.send(feedback);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "feedback not found with id " + req.params.Id
                });
            }
            return res.status(500).send({
                message: "Error retrieving feedback with id " + req.params.Id
            });
        });
};

exports.update = (req, res) => {
    // Validate Request
    if (!req.body.feedback) {
        return res.status(400).send({
            message: "feedback content can not be empty"
        });
    }

    // Find note and update it with the request body
    Feedback.findByIdAndUpdate(req.params.Id, {
        user: req.user.id,
        feedback: req.body.feedback
        }, { new: true })
        .populate("user")
        .then(feedback => {
            if (!feedback) {
                return res.status(404).send({
                    message: "feedback not found with id " + req.params.Id
                });
            }
            res.send(feedback);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "feedback not found with id " + req.params.Id
                });
            }
            return res.status(500).send({
                message: "Error updating feedback with id " + req.params.Id
            });
        });
};

exports.delete = (req, res) => {
    Feedback.findByIdAndRemove(req.params.Id)
        .then(feedback => {
            if (!feedback) {
                return res.status(404).send({
                    message: "feedback not found with id " + req.params.Id
                });
            }
            res.send({ message: "feedback deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "feedback not found with id " + req.params.Id
                });
            }
            return res.status(500).send({
                message: "Could not delete feedback with id " + req.params.Id
            });
        });
};