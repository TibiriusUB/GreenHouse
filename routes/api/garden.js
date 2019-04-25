const router = require("express").Router();
const gardenController = require("../../controller/gardenController.js");

// Matches with "/api/garden"
router.route("/")
  .get(gardenController.findAll)
  .post(gardenController.create);

// Matches with "/api/garden/:id"
router.route("/:id")
  .get(gardenController.findById)
  .put(gardenController.update)
  .delete(gardenController.remove);

module.exports = router;
