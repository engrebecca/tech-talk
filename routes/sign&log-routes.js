const path = require("path");
const db = require("../models");
const passport = require("../config/passport");
const isAuthenticated = require("../config/middleware/isAuthenticated");
const isProfileConfirmed = require("../config/middleware/isProfileConfirmed");

module.exports = (app) => {

    // app.post("/signup", (req, res) => {
    //     db.user.create({
    //         username: req.body.username,
    //         password: req.body.password
    //     })
    //         .then(() => {
    //             res.redirect(307, "/api/login");
    //         })
    //         .catch((err) => {
    //             res.status(401).json(err)
    //         });
    // });

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