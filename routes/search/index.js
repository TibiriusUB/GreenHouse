const router = require("express").Router();
const searchRoute = require("./trefleSearch");

// Trefle API route
router.use("/web", searchRoute);

module.exports = router;
