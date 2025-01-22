const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.authUser = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1] || req.cookies.token;
  if (!token) {
    return res.status(401).send({ message: "Unauthorized" });
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await userModel.findById(decoded._id);
  if (!user) {
    return res.status(401).send({ message: "Unauthorized" });
  }
  req.user = user;
  next();
};
