// From Google-Book-Search homework

const router = require("express").Router();
const userController = require("../../controllers/userController");

// Routes for displaying books and saving new books
router.route("/")
  // view saved books
  .get(userController.findAll)
  // add new saved book
  .post(userController.create);

// Routes for finding saved books and removing books from saved list
router.route("/:id")
  // delete book by id
  .get(userController.findOne)

module.exports = router;
