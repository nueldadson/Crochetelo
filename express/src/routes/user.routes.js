// src/routes/user.routes.js
const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const adminMiddleware = require("../middlewares/adminMiddleware");
const {
	getMe,
	updateMe,
	getAllUsers,
} = require("../controllers/user.controller");

// 1) Get/Update current user
router.get("/me", authMiddleware, getMe);
router.put("/me", authMiddleware, updateMe);

// 2) Admin route to list all users
router.get("/", authMiddleware, adminMiddleware, getAllUsers);

module.exports = router;
