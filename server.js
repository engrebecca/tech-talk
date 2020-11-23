// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
const routes = require("./routes");

// Sets up the Express App
// =============================================================
var express = require("express");
var app = express();
var PORT = process.env.PORT || 3001;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Give server access to routes
// =============================================================
app.use(routes);

// Syncing our sequelize models and then starting our Express app
// Force will be true for all environments except for when in production environment/Heroku
// =============================================================

db.sequelize.sync({ force: true }).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});