const db = require("../models");
const cloudinary = require('cloudinary').v2;

// Configure Cloudinary with credentials
cloudinary.config({
    cloud_name: "tech-talk",
    api_key: "438186626146857",
    api_secret: "xpx_dD4p45QfTAOlA0OtHByYUr0"
});

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
        // Use uploader to upload a new image to Cloudinary
        cloudinary.uploader.upload(req.files.image.path, result => {
            db.User.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password,
                bio: req.body.bio,
                photo: result.url,
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