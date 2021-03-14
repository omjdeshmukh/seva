const router = require("express").Router();
const user = require("../controllers/user.controller");
const feedback = require("../controllers/feedback.controller");
const service = require("../controllers/service.controller");

// register route
router.post("/register", user.register);

// login route
router.post("/login", user.login);

router.get("/feedback", feedback.findAll);

router.get("/feedback/:Id", feedback.findOne);


//service
router.get("/seriveBycategory/:Id", service.findServiceByCategory);

router.get("/seriveBycategoryAndPin/:Id/:pin", service.findServiceByCategoryAndPin);

router.get('/service/:Id', service.findOne);

router.get('/service', service.findAll);

router.get('/service/:pin', service.findWhere);



module.exports = router;
