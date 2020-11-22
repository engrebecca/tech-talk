const router = require("express").Router();
const commentController = require("../../controllers/commentController");

// Route for displaying a comment and adding a comment.
router.route("/")
  // view comments for specific posts
//   .get(commentController.findAll)
  // add new comment
  .post(commentController.create);


module.exports = router;


