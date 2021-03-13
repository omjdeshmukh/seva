const router = require("express").Router();


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



module.exports = router;