const User = require("../models/User");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/token");

exports.register = async (req, res) => {

  try {

    const { name, email, password, role } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser)
      return res.status(400).json({ message: "Email already registered" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role
    });

    const token = generateToken(user);

    res.status(201).json({
      message: "User registered",
      token
    });

  } catch (err) {

    res.status(500).json({ error: err.message });

  }

};


exports.login = async (req, res) => {

  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");

    if (!user)
      return res.status(400).json({ message: "Invalid credentials" });

    const match = await bcrypt.compare(password, user.password);

    if (!match)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = generateToken(user);

    res.json({
      message: "Login successful",
      token
    });

  } catch (err) {

    res.status(500).json({ error: err.message });

  }

};