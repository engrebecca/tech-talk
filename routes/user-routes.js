const path = require("path");
const db = require("../models");

module.exports = (app) => {

    app.get("/logout", (req, res) => {

        if (req.user.bio === null) {
            req.logout();
            res.redirect("/login");
        } else {
            req.logout();
            res.redirect("/");
        }
    });

    app.get("/createprofile", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/html/profileConfirm.html"));

    });

    app.put("/api/createprofile", (req, res) => {

        db.user.update({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            bio: req.body.bio

        }, {
            where: {
                id: req.user.id
            }
        })
            .then((data) => {
                res.json(data)
            });
    });

    app.get("/api/user_data", (req, res) => {
        if (!req.user) {
            res.json({});
        } else {
            res.json({
                username: req.user.username,
                first_name: req.user.first_name,
                last_name: req.user.last_name,
                bio: req.user.bio,
                id: req.user.id
            });
        }
    });

    app.get("/api/user_data/:userId", (req, res) => {
        db.user.findAll({
            where: {
                id: req.params.userId
            }
        })
            .then(data => {
                res.json(data);
            })
    });

    app.get("/api/post_data", (req, res) => {
        if (!req.user) {
            res.json({});
        } else {
            res.json({
                username: req.user.username,
                first_name: req.user.first_name,
                last_name: req.user.last_name,
                bio: req.user.bio,
                id: req.user.id
            });
        }
    });

    app.post("/api/post", (req, res) => {
        db.post.create({
            body: req.body.body,
            userId: req.user.id
        })
            .then((data) => {
                res.json(data)
            });
    });

    app.post("/api/comment", (req, res) => {
        db.comment.create({
            text: req.body.text,
            userId: req.user.id,
            postId: req.body.postId
        })
            .then((data) => {
                res.json(data)
            });
    });

    app.get("/api/comments/:postId", (req, res) => {
        db.comment.findAll({
            where: {
                postId: req.params.postId
            }
        })
            .then(data => {
                res.json(data);
            });
    });

    app.get("/posts", (req, res) => {
        db.post.findAll({
            where: {
                userId: req.user.id
            }
        })
            .then(data => {
                res.json(data);
            })
    });

};