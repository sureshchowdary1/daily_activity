const express = require("express");
const router = express.Router();

const userController = require("../../controllers/adminController");
const authMiddleware = require("../../middleware/authMiddleware");

router.get("/getUsers", userController.getAllUsers);

module.exports = router;