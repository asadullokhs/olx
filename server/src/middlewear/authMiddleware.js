const JWT = require("jsonwebtoken");

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const authMiddlewear = (req, res, next) => {
  let token = req.headers.token;
  try {
    const decode = JWT.verify(token, JWT_SECRET_KEY);

    req.user = decode;

    if (decode.role === "admin") {
      req.userIsAdmin = true;
    }

    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = authMiddlewear;
