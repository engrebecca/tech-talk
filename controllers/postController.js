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

    create: function (req, res) {
        // const { title, body } = req.body
        db.Post.create(req.body)
            .then(newPost => res.json(newPost))
            .catch(err => res.status(422).json(err));
    }

    // Controller to get all posts w/ associated comments & tags
};