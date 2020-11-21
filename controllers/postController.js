const db = require("../models");

module.exports = {
    // create new post
    async create(req, res) {
        // tags array
        const { title, body, userId, tags } = req.body
        // Validate user input 
        // Look into express validator
        const newPost = await db.Post.create({ title, body, UserId: userId })
        await db.PostTag.bulkCreate(
            tags.map((TagId) => ({ PostId: newPost.id, TagId }))
        )
        res.status(201).end()
    }

    // get all posts w/ associated comments & tags
};