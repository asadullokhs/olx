const express = require("express");
const fileUpload = require("express-fileupload");
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 4002;

const MONGO_URL = process.env.MONGO_URL;

// middlewear
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());

// test
app.get("/", (req, res) => {
  res.send("ok");
});

mongoose
  .connect(MONGO_URL)
  .then(() => {
    app.listen(PORT, () => console.log(`Server started on ${PORT} port...`));
  })
  .catch((error) => console.log(error));
