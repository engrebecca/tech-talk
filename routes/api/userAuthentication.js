const path = require("path");
const passport = require("../../config/passport");
const isAuthenticated = require("../../config/middleware/isAuthenticated");
const isProfileConfirmed = require("../../config/middleware/isProfileConfirmed");

module.exports = (app) => {

    app.get("/login", (req, res) => {
        if (req.user) {
            res.redirect("/members");
        }
        res.sendFile(path.join(__dirname, "../public/html/login.html"));
    });

    app.post("/api/login", passport.authenticate("local"), (req, res) => {
        res.json(req.user);
    });

    app.get("/", (req, res) => {
        if (req.user) {
            res.redirect("/members");
        }

        res.sendFile(path.join(__dirname, "../public/html/signup.html"));
    });

    app.get("/members", isAuthenticated, isProfileConfirmed, (req, res) => {

        res.sendFile(path.join(__dirname, "../public/html/profilePage.html"));

    });


};


module.exports = (app) => {

    app.get("/logout", (req, res) => {

        // if (req.user === null) {
        //     req.logout();
        //     res.redirect("/login");
        // } else {
            req.logout();
            res.redirect("/");
        // }
    });

    app.get("/createprofile", (req, res) => {
        // res.sendFile(path.join(__dirname, "../public/html/profileConfirm.html"));

    });

};