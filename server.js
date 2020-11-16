// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));


// Import routes and give the server access to them
// =============================================================
// var cityRoute = require("./controllers/cityController.js");
// var userRoute = require("./controllers/userController.js");
// var tripRoute = require("./controllers/tripController.js");

// app.use(cityRoute);
// app.use(userRoute);
// app.use(tripRoute);

// Syncing our sequelize models and then starting our Express app
// Force will be true for all environments except for when in production environment/Heroku
// =============================================================

db.sequelize.sync({ force: true }).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});