const Service = require('../model/service.model');
const User = require('../model/user.model');
const { valid } = require('@hapi/joi');
path = require("path");

exports.create = (req, res) => {

    // creat a notes
    // if (!req.files[0].paths) return res.send('Please upload a file')
    // console.log(req.files[0].path)
    const service = new Service({
        user: req.user.id,
        image: "",
        // image: req.files[0].path || "",
        serviceNames: req.body.serviceNames,
        serviceEmail: req.body.serviceEmail,
        servicePincode: req.body.servicePincode,
        category: req.body.category,
        contactNo: req.body.contactNo,
        map_location: req.body.map_location,
        description: req.body.description
    });
    service.save()
        .then(data => {
            Service.populate(service, {path: "user"})
            Service.populate(service, {path: "category"})
            .then(Service => {
                res.json({
                    message: "service added",
                    Service
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

    Service.find()
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

exports.findWhere = (req, res) => {

    Service.find({ servicePincode: req.params.pin})
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

exports.findMyService = (req, res) => {

    Service.find({ user: req.params.Id})
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

exports.findServiceByCategory = (req, res) => {

    Service.find({ category: req.params.Id})
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

exports.findVerify = (req, res) => {

    Service.find({ isVerify: "true"})
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

exports.findServiceByCategoryAndPin = (req, res) => {

    Service.find({ category: req.params.Id , servicePincode: req.params.pin })
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


exports.findOne = (req, res) => {
    Service.findById(req.params.Id)
        .populate("user")
        .populate("category") 
        .then(service => {
            if (!service) {
                return res.status(404).send({
                    message: "service not found with id " + req.params.Id
                });
            }
            res.send(service);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "service not found with id " + req.params.Id
                });
            }
            return res.status(500).send({
                message: "Error retrieving service with id " + req.params.Id
            });
        });
};

exports.update = (req, res) => {
    // Validate Request
    if (!req.body.serviceNames) {
        return res.status(400).send({
            message: "service content can not be empty"
        });
    }

    // Find note and update it with the request body
    Service.findByIdAndUpdate(req.params.Id, {
        user: req.user.id,
        image: req.body.image,
        serviceNames: req.body.serviceNames,
        serviceEmail: req.body.serviceEmail,
        servicePincode: req.body.servicePincode,
        category: req.body.category,
        contactNo: req.body.contactNo,
        map_location: req.body.map_location,
        description: req.body.description
        }, { new: true })
        .populate("user")
        .populate("category") 
        .then(service => {
            if (!service) {
                return res.status(404).send({
                    message: "service not found with id " + req.params.Id
                });
            }
            res.send(service);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "service not found with id " + req.params.Id
                });
            }
            return res.status(500).send({
                message: "Error updating service with id " + req.params.Id
            });
        });
};

exports.delete = (req, res) => {
    Service.findByIdAndRemove(req.params.Id)
        .then(service => {
            if (!service) {
                return res.status(404).send({
                    message: "service not found with id " + req.params.Id
                });
            }
            res.send({ message: "service deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "service not found with id " + req.params.Id
                });
            }
            return res.status(500).send({
                message: "Could not delete service with id " + req.params.Id
            });
        });
};