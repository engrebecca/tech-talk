// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
const routes = require("./routes");
const passport = require("./config/passport");

// Sets up the Express App
// =============================================================
const express = require("express");
const session = require("express-session");
const app = express();
const PORT = process.env.PORT || 3001;

// Requiring our models for syncing
const db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));
//keyboard cat is a cookie setting. Using cookie parser may result in issues if the secret is not the same between this module amd cookie-parser.
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Give server access to routes
// =============================================================
app.use(routes);

// Syncing our sequelize models and then starting our Express app
// Force will be true for all environments except for when in production environment/Heroku
// =============================================================

db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});