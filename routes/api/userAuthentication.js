const path = require("path");
const router = require("express").Router();
const passport = require("../../config/passport");
const isAuthenticated = require("../../config/middleware/isAuthenticated");
const isProfileConfirmed = require("../../config/middleware/isProfileConfirmed");

    // app.post("/SignupPage", (req, res) => {
    //     db.user.create({

    //     })
    // })
console.log("inside Auth file");

    // This is where we need to fix our routes!
    router.route("/")
        .post(passport.authenticate("local"),  (req, res) => {
            console.log("logging in");
            res.json(req.user);
    // app.post("/login", passport.authenticate("local"), (req, res) => {
    //     console.log("logging in");
    //     res.json(req.user);
    });

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




// module.exports = (app) => {

//     app.get("/LogOut", (req, res) => {

//         req.logout();
//         res.redirect("/");

//     });

//     app.get("/profilepage", (req, res) => {

//     });

// };

module.exports = router;
