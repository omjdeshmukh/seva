const router = require("express").Router();
const feedback = require('../controllers/feedback.controller');


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


module.exports = router;