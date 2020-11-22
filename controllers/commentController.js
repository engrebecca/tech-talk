const db = require("../models");

module.exports = {
    // create new comment
    // async create(req, res) {

    //     const { id, text, postId, userId } = req.body
    //     // Validate user input 
    //     // Look into express validator
    //     await db.Comment.create({ text, PostId: postId, UserId: userId })

    //     res.status(201).end()
    // }

    create: function (req, res) {
        db.Comment.create({
            text: req.body.text,
            UserId: req.body.userId,
            PostId: req.body.postId
        })
            .then((data) => {
                res.json(data)
            });
    }

};