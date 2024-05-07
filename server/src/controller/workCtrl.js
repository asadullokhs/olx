const cloudinary = require("cloudinary");
const fs = require("fs");
const mongoose = require("mongoose");

const removeTemp = (pathes) => {
  fs.unlink(pathes, (err) => {
    if (err) {
      throw err;
    }
  });
};

const Work = require("../model/workModel");
const Car = require("../model/carModel");
const Fashion = require("../model/fashionModel");

const workCtrl = {
  add: async (req, res) => {
    const { token } = req.headers;
    try {
      if (!token) {
        return res.status(403).json({ message: "Token is required" });
      }

      const work = new Work(req.body);
      await work.save();
      res.status(201).json({ message: "new Work", work });
    } catch (error) {
      res.status(503).json({ message: error.message });
    }
  },
  get: async (req, res) => {
    try {
      const work = await Work.find();
      res.status(200).json({ message: "All Works", getAll: work });
    } catch (error) {
      res.status(503).json({ message: error.message });
    }
  },
  getOne: async (req, res) => {
    const { id } = req.params;
    try {
      const getWork = await Work.aggregate([
        {
          $match: { _id: new mongoose.Types.ObjectId(id) },
        },
        {
          $lookup: {
            from: "cars",
            let: { authorId: "$authorId" },
            pipeline: [
              { $match: { $expr: { $eq: ["$authorId", "$$authorId"] } } },
            ],
            as: "userCar",
          },
        },
        {
          $lookup: {
            from: "fashions",
            let: { authorId: "$authorId" },
            pipeline: [
              { $match: { $expr: { $eq: ["$authorId", "$$authorId"] } } },
            ],
            as: "userFashion",
          },
        },
        {
          $lookup: {
            from: "works",
            let: { authorId: "$authorId" },
            pipeline: [
              { $match: { $expr: { $eq: ["$authorId", "$$authorId"] } } },
            ],
            as: "userWork",
          },
        },
        {
          $addFields: {
            userProd: {
              $concatArrays: ["$userCar", "$userFashion", "$userWork"],
            },
          },
        },
        {
          $project: {
            userCar: 0,
            userFashion: 0,
            userWork: 0,
          },
        },
        {
          $lookup: {
            from: "users",
            let: { user: "$authorId" },
            pipeline: [{ $match: { $expr: { $eq: ["$_id", "$$user"] } } }],
            as: "user",
          },
        },
        {
          $unwind: "$user",
        },
      ]);
      if (!getWork) {
        return res.status(400).send({ message: "Work not found" });
      }
      res.status(200).json({ message: "Find Work", getOne: getWork });
    } catch (error) {
      res.status(503).json({ message: error.message });
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;
    if (!id) {
      return res.status(403).json({ message: "insufficient information" });
    }

    try {
      const deleteWork = await Work.findByIdAndDelete(id);
      if (!deleteWork) {
        return res.status(400).send({ message: "Car not found" });
      }

      res.status(200).send({ message: "Work deleted", deleteWork });
    } catch (error) {
      res.status(503).json({ message: error.message });
    }
  },
  update: async (req, res) => {
    const { name } = req.body;
    const { id } = req.params;
    if (!name || !id) {
      return res.status(403).json({ message: "insufficient information" });
    }
    try {
      const updateWork = await Work.findById(id);
      if (!updateWork) {
        return res.status(400).send({ message: "Car not found" });
      }

      const newWork = await Work.findByIdAndUpdate(id, req.body, { new: true });
      res.status(200).send({ message: "Update successfully", newWork });
    } catch (error) {
      res.status(503).json({ message: error.message });
    }
  },
};

module.exports = workCtrl;
