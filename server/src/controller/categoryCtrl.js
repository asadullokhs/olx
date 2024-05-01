const Category = require("../model/categoryModel");
const cloudinary = require("cloudinary");
const fs = require("fs");
const mongoose = require("mongoose");

const removeTemp = (path) => {
  fs.unlink(path, (err) => {
    if (err) {
      throw err;
    }
  });
};

const categoryCtrl = {
  add: async (req, res) => {
    const { image } = req.files;
    const { token } = req.headers;
    try {
      if (!token) {
        return res.status(403).json({ message: "Token is required" });
      }
      const format = image.mimetype.split("/")[1];

      if (!format !== "png" && format !== "jpeg") {
        return res.status(403).send("File format inccorect");
      }

      const result = await cloudinary.v2.uploader.upload(
        image.tempFilePath,
        {
          folder: "Olx",
        },
        async (err, result) => {
          if (err) {
            throw err;
          }

          removeTemp(image.tempFilePath);

          return result;
        }
      );
      const rasm = { url: result.secure_url, public_id: result.public_id };

      req.body.image = rasm;

      const category = await Category.create(req.body);

      res
        .status(201)
        .send({ message: "Category added successfully", category });
    } catch (error) {
      res.status(503).send({ message: error.message });
    }
  },

  get: async (req, res) => {
    try {
      const category = await Category.find();

      res.status(200).send({ message: "Categoryies list", category });
    } catch (error) {
      res.status(503).send({ message: error.message });
    }
  },

  delete: async (req, res) => {
    try {
      const { token } = req.headers;
      const { id } = req.params;
      if (!token) {
        return res.status(403).json({ message: "Token is required" });
      }

      if (req.userIsAdmin) {
        const category = await Category.findByIdAndDelete(id);

        if (!category) {
          return res.status(404).send({ message: "Category not found" });
        }

        await cloudinary.v2.uploader.destroy(
          category.image.public_id,
          async (err) => {
            if (err) {
              throw err;
            }
          }
        );

        res
          .status(200)
          .send({ message: "Category delete successfully", category });
      } else {
        res.status(405).json({ message: "Not allowed" });
      }
    } catch (error) {
      res.status(503).send({ message: error.message });
    }
  },

  getCategoryById: async (req, res) => {
    const { id } = req.params;

    try {
      const category = await Category.findById(id);

      res.status(200).json({ message: "Category", category });
    } catch (error) {
      console.log(error);
      res.status(503).json(error.message);
    }
  },
};

module.exports = categoryCtrl;
