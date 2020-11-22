const db = require("../models");

module.exports = {

    // get/find all users
    findAll:function(req, res) {
        db.User.findAll()
        .then(function(data){
            res.json(data);
        });
        // console.log(data);
    },

    // find specific user by userId
    findOne:function(req, res) {
        db.User.findOne({
            where:
            { id: req.params.id }
        })
        .then(function(data){
            res.json(data);
        });
    },

    // create new user
    create:function(req, res) {
        db.User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            bio: req.body.bio,
            // photo: req.body.photo,
            role: req.body.role,
            organization: req.body.organization,
            github: req.body.github,
            website: req.body.website,
            location: req.body.location
        })
        .then(function(data){
            res.json(data);
        });
    }
};

// For Postman entries
// {
//     "firstName": "Christy",
//     "lastName": "Lee",
//     "email": "email",
//     "password": "password",
//     "bio": "bio",
//     "role": "role",
//     "organization": "org",
//     "github": "github",
//     "website": "site",
//     "location": "location"
// }