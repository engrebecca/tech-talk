const db = require("../models");

module.exports = {
    // Controller to create new post
    // async create(req, res) {
    //     try {
    //         // tags is an array
    //         const { title, body, userId, tags } = req.body
    //         const newPost = await db.Post.create({ title, body, UserId: userId })
    //         await db.PostTag.bulkCreate(
    //             tags.map((TagId) => ({ PostId: newPost.id, TagId }))
    //         )
    //         res.status(201).end()
    //     } catch (err) {
    //         console.log(err);
    //     }

    // }

    // Controller to create a new post with it's associated user and tags
    create: (req, res) => {
        const { title, body, UserId, tags } = req.body
        db.Post.create({ title, body, UserId })
            .then(newPost => {
                db.PostTag.bulkCreate(
                    tags.map((TagId) => ({ PostId: newPost.id, TagId }))
                ).catch(err => res.status(422).json(err));
                res.status(201).end()
            })
    },

    // Controller to get all posts w/ associated comments & tags
    findAll: (req, res) => {
        db.Post.findAll({
            include: [{
                model: db.Comment,
                as: "Comments",
                attributes: ["text"]
            },
            {
                model: db.PostTag,
                include: {
                    model: db.Tag,
                    attriutes: ["name"]
                }
            }]
        })
            .then(data => res.json(data))
            .catch(err => {
                console.log(err);
                res.send(false)
            })
    }
};