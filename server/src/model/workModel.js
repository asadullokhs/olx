const mongoose = require("mongoose");

const workSchema = new mongoose.Schema(
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
    content: {
      type: String,
    },
    link: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    kindOfWork: {
      type: String,
      required: true,
    },
    employmentType: {
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

module.exports = mongoose.model("Work", workSchema);
