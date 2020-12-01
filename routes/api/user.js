const router = require("express").Router();
const userController = require("../../controllers/userController");
const passport = require("../../config/passport");
const jwt = require("jsonwebtoken");
const db = require("../../models");

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
  .post(passport.authenticate("local", { session: false }), (req, res) => {
    console.log("logging in");
    // Adds session cookie
    const token = jwt.sign({ id: req.user.id }, process.env.JWT_PRIVATE_KEY, { algorithm: "RS256" });
    req.session.jwt = token;
    res.json(req.user);
  });

router.route("/logout")
  .get((req, res) => {
    console.log("logging out");
    // Deletes session cookie
    req.session = null;
    window.location.href = "/";
  })


// Allows us to access user's data for user logged in, otherwise will return null
router.route("/current")
  .get(async (req, res) => {
    // If session exists and we are able to find the user in the db that matches payload.id, return user.
    // If any of the above fails, .catch and return null
    console.log("getting current user")
    if (req.session?.jwt) {
      try {
        const payload = jwt.verify(req.session.jwt, process.env.JWT_PUBLIC_KEY)
        const dbUser = await db.User.findOne({
          where: {
            id: payload.id
          }
        })
        if (dbUser) {
          res.json(dbUser)
          return
        }
      }
      catch (e) {
        console.error(e);
      }
    }
    res.json(null);
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
