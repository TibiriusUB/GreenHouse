const router = require("express").Router();
const userInfo = require("./users");
const Routes = require("./plant");
const gardenInfo = require("./garden");


// User routes
router.use("/user", userInfo);
// Plant routes
router.use("/plant", Routes);
// Garden routes
router.use("/garden", gardenInfo);

module.exports = router;
