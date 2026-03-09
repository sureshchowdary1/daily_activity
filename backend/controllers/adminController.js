const User = require("../models/User");

exports.getAllUsers = async (req, res) => {

  const users = await User.find().select("-password -_id -__v");

  res.json(users);

};