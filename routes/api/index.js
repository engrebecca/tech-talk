const router = require("express").Router();
const commentRoutes = require("./comment");
const postRoutes = require("./post");
const userRoutes = require("./user");
const userAuthRoutes = require("./userAuthentication");

router.use("/post", postRoutes);
router.use("/user", userRoutes);
router.use("/comments", commentRoutes);
router.use("/userAuthentication", userAuthRoutes);

module.exports = router;