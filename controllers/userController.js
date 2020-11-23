const db = require("../models");

module.exports = {

    // get/find all users
    findAll: (req, res) => {
        db.User.findAll()
            .then(data => res.json(data))
            .catch(err => {
                console.log(err);
                res.send(false)
            })
    },

    // find specific user by userId
    findOne: (req, res) => {
        db.User.findOne({
            where:
                { id: req.params.id }
        })
            .then(data => res.json(data))
            .catch(err => {
                console.log(err);
                res.send(false)
            })
    },

    // create new user
    create: (req, res) => {
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
            .then(data => res.json(data))
            .catch(err => {
                console.log(err);
                res.send(false)
            })
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