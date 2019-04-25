const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const searchRoutes = require("./search");

// API Routes (MongoDB)
router.use("/api", apiRoutes);

//REST search Routes (Trefle)
router.use("/search", searchRoutes)

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
