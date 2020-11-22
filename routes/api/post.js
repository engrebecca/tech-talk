const router = require("express").Router();
const postController = require("../../controllers/postController");

// Routes for getting and adding posts
router.route("/")
    // add new saved book
    .post(postController.create);

// view saved books
// .get(bookController.findAll)

module.exports = router;