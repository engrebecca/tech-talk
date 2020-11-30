const db = require("../models");

module.exports = {
    // Controller to create a new post with it's associated user and tags
    create: (req, res) => {
        const { title, body, UserId, tags } = req.body
        db.Post.create({ title, body, UserId })
            .then(newPost => {
                db.PostTag.bulkCreate(
                    tags.map((TagId) => ({ PostId: newPost.id, TagId }))
                ).catch(err => res.status(422).json(err));
                res.send(true);
            })
    },

    // Controller to get all posts w/ associated comments & tags
    findAll: (req, res) => {
        db.Post.findAll({
            include: [{
                model: db.Comment,
                as: "Comments",
                attributes: ["id", "text"],
                include: {
                    model: db.User,
                    attriutes: ["fistName", "lastName"]
                }
            },
            {
                model: db.PostTag,
                include: {
                    model: db.Tag,
                    attriutes: ["name"]
                }
            },
            {
                model: db.User,
                as: "User",
                attriutes: ["fistName", "lastName"]
            }]
        })
            .then(data => res.json(data))
            .catch(err => {
                console.log(err);
                res.send(false)
            })
    }
};