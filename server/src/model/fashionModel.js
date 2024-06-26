const mongoose = require("mongoose");

const fashionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    categoryType: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Type",
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    subId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Sub",
    },
    photos: {
      type: Array,
      default: [],
      required: true,
    },
    content: {
      type: String,
    },
    price: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Fashion", fashionSchema);
