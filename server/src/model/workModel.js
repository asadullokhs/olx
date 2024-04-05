const mongoose = require("mongoose");

const workSchema = new mongoose.Schema(
  {
    work: {
      name: String,
      required: true,
      work_category: {
        name: String,
        required: true,
        sub_category: {
          name: String,
          category: String,
          content: String,
          linkToResume: String,
          salary: String,
          kindOfWork: String,
          employmentType: String,
          email: String,
          location: String,
          author: String,
          phone: String,
        },
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Work", workSchema);
