const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// If no valid API routes are hit, send homepage
// router.use((req, res) =>
//     res.sendFile(path.join(__dirname, "../google-book-search-mern/build/index.html"))
// );

module.exports = router;
