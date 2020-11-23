const router = require("express").Router();
const commentController = require("../../controllers/commentController");

// Route for creating a comment that's associated with a post.
router.route("/")

  // add new comment
  .post(commentController.create);


module.exports = router;


