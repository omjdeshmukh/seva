const Category = require('../model/category.model');

exports.create = (req, res) => {
    // creat a notes
    const category = new Category({
        icon: req.body.icon,
        category: req.body.category,
        description:  req.body.description
    });
    category.save()
        .then(data => {
            res.send(category);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while"
            });
        });
};



exports.findAll = (req, res) => {

    Category.find()
        .then(category => {
            res.send(category);
            //console.log(category);

        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while"
            });
        });
};


exports.findOne = (req, res) => {
    Category.findById(req.params.Id)
        .then(category => {
            if (!category) {
                return res.status(404).send({
                    message: "category not found with id " + req.params.Id
                });
            }
            res.send(category);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "category not found with id " + req.params.Id
                });
            }
            return res.status(500).send({
                message: "Error retrieving feedback with id " + req.params.Id
            });
        });
};

exports.update = (req, res) => {
    // Validate Request
    if (!req.body.category) {
        return res.status(400).send({
            message: "category content can not be empty"
        });
    }

    // Find note and update it with the request body
    Category.findByIdAndUpdate(req.params.Id, {
        icon: req.body.icon,
        category: req.body.category,
        description:  req.body.description
        }, { new: true })
        .then(category => {
            if (!category) {
                return res.status(404).send({
                    message: "category not found with id " + req.params.Id
                });
            }
            res.send(category);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "category not found with id " + req.params.Id
                });
            }
            return res.status(500).send({
                message: "Error updating category with id " + req.params.Id
            });
        });
};

exports.delete = (req, res) => {
    Category.findByIdAndRemove(req.params.Id)
        .then(category => {
            if (!category) {
                return res.status(404).send({
                    message: "category not found with id " + req.params.Id
                });
            }
            res.send({ message: "category deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "category not found with id " + req.params.Id
                });
            }
            return res.status(500).send({
                message: "Could not delete category with id " + req.params.Id
            });
        });
};