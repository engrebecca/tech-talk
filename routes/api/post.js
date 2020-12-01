const router = require("express").Router();
const postController = require("../../controllers/postController");
const passport = require("../../config/passport");

// Routes for getting and adding posts
router.route("/")
    // add new post
    .post(passport.authenticate("jwt", { session: false }), postController.create)

    // view saved posts
    .get(postController.findAll)

module.exports = router;