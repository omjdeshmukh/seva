const Joi = require("@hapi/joi");

const registerValidation = (data) => {
    const schema = Joi.object({
        userName: Joi.string().min(6).max(255).required(),
        fullName: Joi.string().min(6).max(255).required(),
        email: Joi.string().min(6).max(255).required().email(),
        password: Joi.string().min(6).max(1024).required(),
        role: Joi.string().min(1).max(1024).required(),
        state: Joi.string().min(1).max(1024).required(),
        city: Joi.string().min(1).max(1024).required(),
        village: Joi.string().min(1).max(1024).required(),
        pincode: Joi.string().min(1).max(1024).required(),
    });

    return schema.validate(data);
};

const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().min(6).max(255).required().email(),
        password: Joi.string().min(6).max(1024).required(),
    });

    return schema.validate(data);
};

module.exports = {
    registerValidation,
    loginValidation,
};