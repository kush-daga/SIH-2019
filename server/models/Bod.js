const mongoose = require("mongoose");

const BodSchema = new mongoose.Schema({
  value: {
    type: Number,
    default: 0
  },
  timestamp: {
    type: Date,
    default: Date.now()
  },
  stp: {
    type: String,
    default: "thapar"
  }
});

module.exports = mongoose.model("Bod", BodSchema);
