const router = require("express").Router();
const userController = require("../../controllers/userController");
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

// Routes getting all users and add a new user
router.route("/")
  // View all users
  .get(userController.findAll)
  // Add a new user
  .post(userController.create, multipartMiddleware);

// Route for finding a user by their id
router.route("/:id")
  .get(userController.findOne)

module.exports = router;
