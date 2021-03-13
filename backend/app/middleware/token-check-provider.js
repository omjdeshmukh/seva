const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const User = require('../model/user.model');

dotenv.config();

// middleware to validate token
const checkprovider = (req, res, next) => {
    const token = req.header("auth-token");
    if (!token) return res.status(401).json({ error: "Access denied" });

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        // next();
        console.log(req.user.id);
        User.findById(req.user.id)
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "user not found with id " + req.user.id
                });
            }
            //res.send(user);
            // if(use)
            console.log(user.role);
            if(user.role == "provider"){
                next(); 
                //console.log("true");
            }else{
                console.log("false");
                res.status(401).json({ error: "Access denied" })
            }
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "user not found with id " + req.user.id
                });
            }
            return res.status(500).send({
                message: "Error retrieving user with id " + req.user.id
            });
        });
        
        
        console.log("hello");
    } catch (err) {
        res.status(400).json({ error: "Token is not valid" });
    }
};


module.exports = checkprovider;
