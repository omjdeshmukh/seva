const router = require("express").Router();
const feedback = require('../controllers/feedback.controller');
const suggestion = require('../controllers/suggestion.controller');

router.get("/", (req, res) => {
    res.json({
        error: null,
        data: {
            title: "User dashboard",
            content: "dashboard content",
            user: req.user,
        },
    });
});


router.post('/feedback', feedback.create);

router.put('/feedback/:Id', feedback.update);

router.delete('/feedback/:Id', feedback.delete);

// router.get('/feedback', feedback.findAll);

// router.get('/feedback/:Id', feedback.findOne);


router.post('/suggestion', suggestion.create);

router.put('/suggestion/:Id', suggestion.update);

router.delete('/suggestion/:Id', suggestion.delete);

router.get('/my/suggestion/:Id', suggestion.findMySuggestion);


module.exports = router;