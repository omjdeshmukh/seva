const router = require("express").Router();
const user = require('../controllers/user.controller');


// register route
router.post("/register", user.register);

// login route
router.post("/login", user.login);

module.exports = router;