const router = require("express").Router();
const user = require("../controllers/user.controller");
const feedback = require("../controllers/feedback.controller");
const service = require("../controllers/service.controller");
const suggestion = require("../controllers/suggestion.controller");

// register route
router.post("/register", user.register);

// login route
router.post("/login", user.login);

router.get("/feedback", feedback.findAll);

router.get("/feedback/:Id", feedback.findOne);

//service
router.get("/seriveBycategory/:Id", service.findServiceByCategory);

router.get(
  "/seriveBycategoryAndPin/:Id/:pin",
  service.findServiceByCategoryAndPin
);

router.get("/service/:Id", service.findOne);

router.get("/service", service.findAll);

router.get("/serviceByPin/:pin", service.findWhere);

router.get("/VerifiedService", service.findVerify);

//suggestion
router.get("/suggestionBycategory/:Id", suggestion.findSuggestionByCategory);

router.get(
  "/suggestionBycategoryAndPin/:Id/:pin",
  suggestion.findSuggestionByCategoryAndPin
);

router.get("/suggestion/:Id", suggestion.findOne);

router.get("/suggestion", suggestion.findAll);

router.get("/suggestionByPincode/:pin", suggestion.findWhere);

router.get("/validSuggestion", suggestion.findVaild);

module.exports = router;
