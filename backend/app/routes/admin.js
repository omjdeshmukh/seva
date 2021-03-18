const router = require("express").Router();
const category = require('../controllers/category.controller');
const user = require("../controllers/user.controller");


router.get("/", (req, res) => {
    res.json({
        error: null,
        data: {
            title: "admin dashboard",
            content: "dashboard content",
            user: req.user,
        },
    });
});


//category
router.post('/category', category.create);

router.put('/category/:Id', category.update);

router.delete('/category/:Id', category.delete);

router.get('/category', category.findAll);

router.get('/category/:Id', category.findOne);


//user 

router.get('/alluser', user.findAll);


module.exports = router;