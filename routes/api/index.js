const path = require("path");
const router = require("express").Router();
const commentRoutes = require("./comment");
const postRoutes = require("./post");
const userRoutes = require("./user");

// router.use("/user", userRoutes);
router.use("/user", userRoutes);

module.exports = router;