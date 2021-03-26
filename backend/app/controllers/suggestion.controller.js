const Suggestion = require('../model/suggestion.model');
const User = require('../model/user.model');
const { valid } = require('@hapi/joi');

exports.create = (req, res) => {

    // create suggestion
    const suggestion = new Suggestion({
        user: req.user.id,
        ServiceType: req.body.ServiceType,
        ServicePinCode: req.body.ServicePinCode,
        category: req.body.category,
        ServiceDescription: req.body.ServiceDescription,
    });
    suggestion.save()
        .then(data => {
            Suggestion.populate(suggestion, {path: "user"})
            Suggestion.populate(suggestion, {path: "category"})
            .then(suggestion => {
                res.json({
                    message: "suggestion added",
                    Suggestion
                 });
            })
            //res.send(service);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while"
            });
        });
};



exports.findAll = (req, res) => {

    Suggestion.find()
        .populate("user") 
        .populate("category") 
        .then(suggestion => {
            res.send(suggestion);
            //console.log(feedback);

        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while"
            });
        });
};

exports.findWhere = (req, res) => {

    Suggestion.find({ ServicePinCode: req.params.pin})
        .populate("user") 
        .populate("category") 
        .then(suggestion => {
            res.send(suggestion);
            //console.log(feedback);

        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while"
            });
        });
};

exports.findMySuggestion = (req, res) => {

    Suggestion.find({ user: req.params.Id})
        .populate("user") 
        .populate("category") 
        .then(suggestion => {
            res.send(suggestion);
            //console.log(feedback);

        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while"
            });
        });
};

exports.findAndVote = (req, res) => {

    Suggestion.findById(req.params.Id)
        .populate("user") 
        .populate("category") 
        .then(suggestion => {
            //res.send(suggestion);
            const value = parseInt(suggestion.voteCount, 10);
            // console.log("total" + value + 1);
            ///upadte 
            Suggestion.findByIdAndUpdate(req.params.Id, {
                voteCount: value + 1,
                }, { new: true })
                .populate("user")
                .populate("category") 
                .then(suggestion => {
                    if (!suggestion) {
                        return res.status(404).send({
                            message: "suggestion not found with id " + req.params.Id
                        });
                    }
                    res.send(suggestion);
                }).catch(err => {s
                    if (err.kind === 'ObjectId') {
                        return res.status(404).send({
                            message: "suggestion not found with id " + req.params.Id
                        });
                    }
                    return res.status(500).send({
                        message: "Error updating suggestion with id " + req.params.Id
                    });
                });

        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while"
            });
        });
};

exports.findSuggestionByCategory = (req, res) => {

    Suggestion.find({ category: req.params.Id})
        .populate("user") 
        .populate("category") 
        .then(suggestion => {
            res.send(suggestion);
            //console.log(feedback);

        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while"
            });
        });
};

exports.findVaild = (req, res) => {

    Service.find({ isVaild: "true"})
        .populate("user") 
        .populate("category") 
        .then(service => {
            res.send(service);
            //console.log(feedback);

        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while"
            });
        });
};

exports.findSuggestionByCategoryAndPin = (req, res) => {

    Suggestion.find({ category: req.params.Id , ServicePinCode: req.params.pin })
        .populate("user") 
        .populate("category") 
        .then(suggestion => {
            res.send(suggestion);
            //console.log(feedback);

        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while"
            });
        });
};


exports.findOne = (req, res) => {
    Suggestion.findById(req.params.Id)
        .populate("user")
        .populate("category") 
        .then(suggestion => {
            if (!suggestion) {
                return res.status(404).send({
                    message: "suggestion not found with id " + req.params.Id
                });
            }
            res.send(suggestion);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "suggestion not found with id " + req.params.Id
                });
            }
            return res.status(500).send({
                message: "Error retrieving service with id " + req.params.Id
            });
        });
};

exports.update = (req, res) => {
    // Validate Request
    if (!req.body.ServiceType) {
        return res.status(400).send({
            message: "suggestion content can not be empty"
        });
    }

    // Find note and update it with the request body
    Suggestion.findByIdAndUpdate(req.params.Id, {
        user: req.user.id,
        ServiceType: req.body.ServiceType,
        ServicePinCode: req.body.ServicePinCode,
        category: req.body.category,
        ServiceDescription: req.body.ServiceDescription,
        
        }, { new: true })
        .populate("user")
        .populate("category") 
        .then(suggestion => {
            if (!suggestion) {
                return res.status(404).send({
                    message: "suggestion not found with id " + req.params.Id
                });
            }
            res.send(suggestion);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "suggestion not found with id " + req.params.Id
                });
            }
            return res.status(500).send({
                message: "Error updating suggestion with id " + req.params.Id
            });
        });
};

exports.delete = (req, res) => {
    Suggestion.findByIdAndRemove(req.params.Id)
        .then(suggestion => {
            if (!suggestion) {
                return res.status(404).send({
                    message: "suggestion not found with id " + req.params.Id
                });
            }
            res.send({ message: "suggestion deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "suggestion not found with id " + req.params.Id
                });
            }
            return res.status(500).send({
                message: "Could not delete suggestion with id " + req.params.Id
            });
        });
};