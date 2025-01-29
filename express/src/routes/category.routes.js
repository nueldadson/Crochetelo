// src/routes/category.routes.js
const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/authMiddleware");
const adminMiddleware = require("../middlewares/adminMiddleware");
const {
	getAllCategories,
	getCategoryById,
	createCategory,
	updateCategory,
	deleteCategory,
} = require("../controllers/category.controller");

// Public: list all categories
router.get("/", getAllCategories);

// Public: get single category
router.get("/:id", getCategoryById);

// Admin-only: create, update, delete
router.post("/", authMiddleware, adminMiddleware, createCategory);
router.put("/:id", authMiddleware, adminMiddleware, updateCategory);
router.delete("/:id", authMiddleware, adminMiddleware, deleteCategory);

module.exports = router;
