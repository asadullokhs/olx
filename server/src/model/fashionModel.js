const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    fashion: {
      name: String,
      category: String,
      photos: Array,
      content: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Car", carSchema);
