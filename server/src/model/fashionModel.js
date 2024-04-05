const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    fashion: {
      name: String,
      category: String,
      photos: Array,
      content: String,
      price: String,
      description: String,
      size: String,
      location: String,
      author: String,
      email: String,
      phone: String,
      fashion_category: {
        category_name: String,
        required: true,
        sub_category: {
          name: String,
          category: String,
          photos: Array,
          content: String,
          price: String,
          state: String,
          size: String,
          email: String,
          location: String,
          phone: String,
        },
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Car", carSchema);
