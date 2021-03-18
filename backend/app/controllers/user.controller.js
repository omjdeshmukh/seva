const express = require("express");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/user.model");

const { registerValidation, loginValidation } = require("../validation");

exports.register = async (req, res) => {
  // validate the user
  const { error } = registerValidation(req.body);

  // throw validation errors
  if (error) return res.status(400).json({ error: error.details[0].message });

  const isEmailExist = await User.findOne({ email: req.body.email });

  const isUserNameExist = await User.findOne({ userName: req.body.userName });

  // throw error when email already registered
  if (isEmailExist)
    return res.status(400).json({ error: "Email already exists" });

  if (isUserNameExist)
    return res.status(400).json({ error: "user name already exists" });

    
  // hash the password
  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    userName: req.body.userName,
    fullName: req.body.fullName,
    email: req.body.email,
    img: req.body.img,
    role: req.body.role,
    state: req.body.state,
    city: req.body.city,
    village: req.body.village,
    pincode: req.body.pincode,
    password,
  });

  try {
    const savedUser = await user.save();
    const token = jwt.sign(
      // payload data
      {
        name: savedUser.name,
        id: savedUser._id,
      },
      process.env.TOKEN_SECRET
      // TOKEN_SECRET
    );
  
    res.header("auth-token", token).json({
      error: null,
      role: savedUser.role,
      data: {
        token,
      },
    });
    //res.json({ error: null, data: { userId: savedUser._id } });
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.login = async (req, res) => {
  // validate the user
  const { error } = loginValidation(req.body);

  // throw validation errors
  if (error) return res.status(400).json({ error: error.details[0].message });

  const user = await User.findOne({ email: req.body.email });

  // throw error when email is wrong
  if (!user) return res.status(400).json({ error: "Email is wrong" });

  // check for password correctness
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    return res.status(400).json({ error: "Password is wrong" });

  // create token
  const token = jwt.sign(
    // payload data
    {
      name: user.name,
      id: user._id,
    },
    process.env.TOKEN_SECRET
    // TOKEN_SECRET
  );

  res.header("auth-token", token).json({
    error: null,
    role: user.role,
    data: {
      token,
    },
  });
};


// user profile

exports.findAll = (req, res) => {

    User.find()
      .then(user => {
          res.send(user);
          //console.log(user);

      }).catch(err => {
          res.status(500).send({
              message: err.message || "Some error occurred while"
          });
      });
};


exports.findOne = (req, res) => {
    User.findById(req.params.Id)
      .then(user => {
          if (!user) {
              return res.status(404).send({
                  message: "user not found with id " + req.params.Id
              });
          }
          res.send(user);
      }).catch(err => {
          if (err.kind === 'ObjectId') {
              return res.status(404).send({
                  message: "user not found with id " + req.params.Id
              });
          }
          return res.status(500).send({
              message: "Error retrieving user with id " + req.params.Id
          });
      });
};

exports.update = (req, res) => {
  // // Validate Request
  if (!req.body.fullName) {
      return res.status(400).send({
          message: "user content can not be empty"
      });
  }

  // Find note and update it with the request body
  User.findByIdAndUpdate(req.params.Id, {

        fullName: req.body.fullName,
        img: req.body.img,
        state: req.body.state,
        city: req.body.city,
        village: req.body.village,
        pincode: req.body.pincode,

      }, { new: true })
      .then(user => {
          if (!user) {
              return res.status(404).send({
                  message: "user not found with id " + req.params.Id
              });
          }
          res.send(user);
      }).catch(err => {
          if (err.kind === 'ObjectId') {
              return res.status(404).send({
                  message: "user not found with id " + req.params.Id
              });
          }
          return res.status(500).send({
              message: "Error updating user with id " + req.params.Id
          });
      });
};

exports.delete = (req, res) => {
  User.findByIdAndRemove(req.params.Id)
      .then(user => {
          if (!user) {
              return res.status(404).send({
                  message: "user not found with id " + req.params.Id
              });
          }
          res.send({ message: "user deleted successfully!" });
      }).catch(err => {
          if (err.kind === 'ObjectId' || err.name === 'NotFound') {
              return res.status(404).send({
                  message: "user not found with id " + req.params.Id
              });
          }
          return res.status(500).send({
              message: "Could not delete user with id " + req.params.Id
          });
      });
};
