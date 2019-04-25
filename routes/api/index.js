const router = require("express").Router();
const userInfo = require("./users");
const Routes = require("./plant");
const Garden = require("./garden");


// User routes (not yet implemented)
router.use("/user", userInfo);
// Plant routes
router.use("/plant", Routes);
// garden routes (not yet implemented)
router.use("/garden", Garden);

module.exports = router;
