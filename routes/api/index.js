const router = require("express").Router();
const commentRoutes = require("./comment");
const postRoutes = require("./post");
const userRoutes = require("./user");

router.use("/post", postRoutes);
router.use("/user", userRoutes);
router.use("/comments", commentRoutes);

module.exports = router;