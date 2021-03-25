const router = require("express").Router();
const service = require('../controllers/service.controller');
const user = require("../controllers/user.controller");
const upload = require('../middleware/multer');

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

 router.post('/service', upload.imageUpload.any(),  service.create);

router.put('/service/:Id', service.update);

router.delete('/service/:Id', service.delete);

router.get('/service/:Id', service.findOne);

router.get('/my/service/:Id', service.findMyService);

// router.get('/service/:Id', service.findOne);

// router.get('/service', service.findAll);

// router.get('/service/:pin', service.findWhere);

router.get('/profile/:Id', user.findOne);

router.put('/profile/:Id', user.update);

router.delete('/profile/:Id', user.delete);


module.exports = router;