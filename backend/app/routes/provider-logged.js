const router = require("express").Router();
const service = require('../controllers/service.controller');

router.get("/", (req, res) => {
    res.json({
        error: null,
        data: {
            title: "Provider dashboard",
            content: "dashboard content",
            user: req.user,
        },
    });
});

 router.post('/service', service.create);

router.put('/service/:Id', service.update);

router.delete('/service/:Id', service.delete);

router.get('/my/service/:Id', service.findMyService);

// router.get('/service/:Id', service.findOne);

// router.get('/service', service.findAll);

// router.get('/service/:pin', service.findWhere);


module.exports = router;