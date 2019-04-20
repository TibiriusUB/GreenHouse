const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema({
  plant: Schema.Types.Mixed,
  // title: { type: String, required: true },
  // sciName: { type: String, required: true },
  // idNo: String,
  // image: String,
  // link: String,
});

const Plant = mongoose.model("plant", plantSchema);

module.exports = Plant;