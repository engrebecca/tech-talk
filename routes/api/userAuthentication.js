const path = require("path");
const passport = require("../../config/passport");
const isAuthenticated = require("../../config/middleware/isAuthenticated");
const isProfileConfirmed = require("../../config/middleware/isProfileConfirmed");

module.exports = (app) => {

    // app.post("/SignupPage", (req, res) => {
    //     db.user.create({

    //     })
    // })

    app.get("/homepage", (req, res) => {
        if (req.user) {
            res.redirect("/profile");
        }
        // res.sendFile(path.join(__dirname, "../../client/src/pages/ProfilePage.js"));
    });

    app.post("/api/homepage", passport.authenticate("local"), (req, res) => {
        res.json(req.user);
    });

    app.get("/", (req, res) => {
        if (req.user) {
            res.redirect("/profile");
        }

        // res.sendFile(path.join(__dirname, "../../../../pages/SignupPage.js"));
    });

    app.get("/profile", isAuthenticated, isProfileConfirmed, (req, res) => {

        // res.sendFile(path.join(__dirname, "../../../../pages/ProfilePage.js"));

    });


};


module.exports = (app) => {

    app.get("/LogOut", (req, res) => {

            req.logout();
            res.redirect("/");
        
    });

    app.get("/profilepage", (req, res) => {

    });

};