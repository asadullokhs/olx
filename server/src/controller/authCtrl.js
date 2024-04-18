const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const userCtrl = {
  login: async (req, res) => {
    const { email, password } = req.body;
    try {
      if (password && email) {
        const oldUser = await User.findOne({ email });
        if (!oldUser) {
          return res.status(404).json({ message: "User not found" });
        }

        const isPasswordCorrect = await bcrypt.compare(
          req.body.password,
          oldUser.password
        );
        if (!isPasswordCorrect) {
          return res
            .status(400)
            .json({ message: "Email or password is incorrect" });
        }

        const token = JWT.sign(
          { email: oldUser.email, _id: oldUser._id, role: oldUser.role },
          JWT_SECRET_KEY
        );

        const { password, ...otherDetails } = oldUser._doc;
        res
          .status(200)
          .send({ message: "Login successfully", user: otherDetails, token });
      } else {
        res.status(403).send({ message: "Please fill all fields" });
      }
    } catch (error) {
      res.status(503).send({ message: error.message });
      console.log(error);
    }
  },
  signup: async (req, res) => {
    const { email } = req.body;

    try {
      const user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ message: "This email is already taken" });
      }

      const hashdedPassword = await bcrypt.hash(req.body.password, 10);

      req.body.password = hashdedPassword;

      const newUser = await User.create(req.body);

      const { password, ...otherDetails } = newUser._doc;

      const token = JWT.sign(otherDetails, JWT_SECRET_KEY, {
        expiresIn: "24h",
      });

      res.status(201).send({
        message: "Created successfully",
        user: otherDetails,
        token,
      });
    } catch (error) {
      console.log(error);
      res.status(503).json(error.message);
    }
  },
  googleAuth: async (req, res) => {
    const { email } = req.body;
    try {
      const findUser = await User.findOne({ email });

      if (findUser) {
        const token = JWT.sign(
          { email: findUser.email, _id: findUser._id, role: findUser.role },
          JWT_SECRET_KEY
        );

        res
          .status(200)
          .send({ message: "Login successfully", findUser, token });
      } else {
        const newUser = await User.create(req.body);

        const token = JWT.sign(newUser, JWT_SECRET_KEY, {
          expiresIn: "24h",
        });

        res.status(201).send({
          message: "Created successfully",
          user: newUser,
          token,
        });
      }
    } catch (error) {
      res.status(503).json({ message: error.message });
    }
  },
};

module.exports = userCtrl;
