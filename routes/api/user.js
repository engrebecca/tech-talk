const router = require("express").Router();
const userController = require("../../controllers/userController");
const passport = require("../../config/passport");

// var multipart = require('connect-multiparty');
// var multipartMiddleware = multipart();

console.log("inside User file");

// Routes getting all users and add a new user
router.route("/")
  // View all users
  .get(userController.findAll)
  // Add a new user
  .post(userController.create);

// Route for finding a user by their id
router.route("/:id")
  .get(userController.findOne)


// This is the route to login user with passport
router.route("/login")
  .post(passport.authenticate("local"), (req, res) => {
    console.log("logging in");
    res.json(req.user);
  });

  router.route("/logout") 
  .get((req, res)=> {
  console.log("logging out");
  req.logout();
  window.location.href="/";
  })

// app.get("/homepage", (req, res) => {
//     if (req.user) {
//         res.redirect("/profile");
//     }
//     // res.sendFile(path.join(__dirname, "../../client/src/pages/ProfilePage.js"));
// });

// app.post("/api/homepage", passport.authenticate("local"), (req, res) => {
//     res.json(req.user);
// });

// app.get("/", (req, res) => {
//     if (req.user) {
//         res.redirect("/profile");
//     }

//     // res.sendFile(path.join(__dirname, "../../../../pages/SignupPage.js"));
// });

// app.get("/profile", isAuthenticated, isProfileConfirmed, (req, res) => {

//     // res.sendFile(path.join(__dirname, "../../../../pages/ProfilePage.js"));

// });



// app.get("/profilepage", (req, res) => {

// });

module.exports = router;
