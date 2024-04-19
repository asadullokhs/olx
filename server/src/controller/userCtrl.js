const User = require("../model/userModel");
const JWT = require("jsonwebtoken");

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

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
    try {
      const { id } = req.params;
      const { token } = req.headers;

      if (!token) {
        res.status(403).send({ message: "Token is required" });
      }

      const currentUser = JWT.decode(token);

      if (id == currentUser._id || currentUser.role == "admin") {
        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
          return res.status(404).send({ message: "Not found" });
        }
        if (deletedUser.profilePicture) {
        }

        return res
          .status(200)
          .send({ message: "Deleted succesfully", deletedUser });
      }

      res.status(405).send({ message: "Not allowed" });
    } catch (error) {
      res.status(503).send(error.message);
    }
  },
};

module.exports = userCtrl;
