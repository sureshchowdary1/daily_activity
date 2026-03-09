const express = require("express");
const router = express.Router();

const auth = require("../../middleware/authMiddleware");
const role = require("../../middleware/roleMiddleware");

const adminController = require("../../controllers/adminController");

router.get("/users", auth, role("admin"), adminController.getAllUsers);

module.exports = router;