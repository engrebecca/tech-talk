// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
require('newrelic');
require("dotenv").config();
const routes = require("./routes");
const passport = require("./config/passport");
console.log(process.env.JWT_SECRET)
// Sets up the Express App
// =============================================================
const express = require("express");
const cookieSession = require("cookie-session");
const app = express();
const PORT = process.env.PORT || 3001;

// Requiring our models for syncing
const db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("./client/build"));
// Add a cookie to each session
app.use(cookieSession({ httpOnly: true, signed: false }));
app.use(passport.initialize());

// Give server access to routes
// =============================================================
app.use(routes);

// Syncing our sequelize models and then starting our Express app
// Force will be true for all environments except for when in production environment/Heroku
// =============================================================

db.sequelize.sync().then(function () {
    app.listen(process.env.PORT, '0.0.0.0', function () {
        console.log("App listening on PORT " + PORT);
    });
});