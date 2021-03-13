const router = require("express").Router();
const user = require('../controllers/user.controller');
const feedback = require('../controllers/feedback.controller');


// register route
router.post("/register", user.register);

// login route
router.post("/login", user.login);

router.get('/feedback', feedback.findAll);

router.get('/feedback/:Id', feedback.findOne);


//category
router.post('/category', feedback.findAll);

module.exports = router;