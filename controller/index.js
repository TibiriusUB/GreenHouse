const User = require("./usersController");
const Plant = require("./plantsController");
const Garden = require("./gardenController");

//grabbing the data controls, referenceing MongoDB models (how the data is formed and held in the database,)
//and generally serving the In/Out gateway to the database

module.exports = {
    User,
    Plant,
    Garden
};