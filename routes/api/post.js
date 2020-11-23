const router = require("express").Router();
const postController = require("../../controllers/postController");

// Routes for getting and adding posts
router.route("/")
    // add new post
    .post(postController.create)

    // view saved posts
    .get(postController.findAll)

module.exports = router;