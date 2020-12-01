const router = require("express").Router();
const commentController = require("../../controllers/commentController");
const passport = require("../../config/passport");

// Route for creating a comment that's associated with a post.
router.route("/")

  // add new comment
  .post(passport.authenticate("jwt", { session: false }), commentController.create);


module.exports = router;


