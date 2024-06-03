const User = require("../model/userModel");
const cloudinary = require("cloudinary");
const bcrypt = require("bcrypt");
const fs = require("fs");
const Car = require("../model/carModel");
const workModel = require("../model/workModel");
const fashionModel = require("../model/fashionModel");

const removeTemp = (path) => {
  fs.unlink(path, (err) => {
    if (err) {
      throw err;
    }
  });
};

const userCtrl = {
  getUsers: async (req, res) => {
    try {
      const authors = await User.find();

      res.status(200).send({ message: "All users", authors });
    } catch (error) {
      console.log(error);
      res.status(503).send(error.message);
    }
  },
  getUserId: async (req, res) => {
    const { id } = req.params;
    try {
      let user = await User.findById(id);

      if (!user) {
        return res.status(404).send({ message: "Not found" });
      }

      const { password, ...otherDetails } = user._doc;

      res.status(200).send({ message: "User info", user: otherDetails });
    } catch (error) {
      res.status(503).send({ message: error.message });
    }
  },
  deleteUser: async (req, res) => {
    const { id } = req.params;
    try {
      if (id === req.user._id || req.userIsAdmin) {
        const deleteUser = await User.findByIdAndDelete(id);
        if (deleteUser) {
          if (deleteUser.profilePicture?.public_id) {
            await cloudinary.v2.uploader.destroy(
              deleteUser.profilePicture.public_id,
              async (err) => {
                if (err) {
                  throw err;
                }
              }
            );
          }
          return res
            .status(200)
            .json({ message: "User deleted successfully", user: deleteUser });
        }
        return res.status(404).json({ message: "User not found" });
      }
      const delCar = await Car.deleteMany({ authorId: id });
      await Work.deleteMany({ authorId: id });
      await Fashion.deleteMany({ authorId: id });
      res.status(405).json({
        message: "Acces Denied!. You can delete only your own accout",
      });
    } catch (error) {
      res.status(503).json({ message: error.message });
    }
  },

  updateUser: async (req, res) => {
    try {
      const { password } = req.body;
      const { id } = req.params;
      const { token } = req.headers;

      if (!token) {
        return res.status(403).json({ message: "token is required" });
      }
      const user = await User.findById(id);

      if (id == user._id || user.role == "admin") {
        if (password && password !== "") {
          const hashdedPassword = await bcrypt.hash(password, 10);

          req.body.password = hashdedPassword;
        } else {
          delete req.body.password;
        }

        if (req.files) {
          const { profilePicture } = req.files;
          if (user.profilePicture && typeof user.profilePicture === "object") {
            let public_id = user.profilePicture?.public_id;
            await cloudinary.v2.uploader.destroy(public_id, async (err) => {
              if (err) {
                throw err;
              }
            });
          }

          const result = await cloudinary.v2.uploader.upload(
            profilePicture.tempFilePath,
            {
              folder: "Olx",
            },
            async (err, result) => {
              if (err) {
                throw err;
              }

              removeTemp(profilePicture.tempFilePath);

              return result;
            }
          );
          const rasm = { url: result.secure_url, public_id: result.public_id };

          req.body.profilePicture = rasm;
        }
        const newUser = await User.findByIdAndUpdate(
          id,
          {
            name: req.body.name,
            profilePicture: req.body.profilePicture,
            surname: req.body.surname,
            password: req.body.password,
            phone: req.body.phone,
            email: req.body.email,
            role: req.body.role,
          },
          {
            new: true,
          }
        );

        res.status(200).send({ message: "Successfully updated", newUser });
      }
    } catch (error) {
      res.status(503).json(error.message);
    }
  },
  like: async (req, res) => {
    const { id } = req.params;
    const { prodId } = req.body;
    try {
      const user = await User.findById(id);
      if (!user) {
        return res.status(404).send({ message: "User is Not Found" });
      }
      if (user.likes.includes(prodId)) {
        await User.updateOne({ $pull: { likes: prodId } });
        const updatedUser = await User.findById(id);
        res.status(200).json({ message: "Like canceled", user: updatedUser });
      } else {
        await User.updateOne({ $push: { likes: prodId } });
        const updatedUser = await User.findById(id);
        res.status(200).json({ message: "Like added", user: updatedUser });
      }
    } catch (error) {
      res.status(503).json({ message: error.message });
    }
  },
};

module.exports = userCtrl;
