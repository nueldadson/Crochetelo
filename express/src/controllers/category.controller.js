// src/controllers/category.controller.js
const { loadDB, saveDB } = require("../utils/fileDb");

function getAllCategories(req, res) {
	try {
		const db = loadDB();
		res.json(db.categories);
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: "Internal server error" });
	}
}

function getCategoryById(req, res) {
	try {
		const { id } = req.params;
		const db = loadDB();

		const category = db.categories.find((cat) => cat.id === id);
		if (!category) {
			return res.status(404).json({ message: "Category not found." });
		}
		res.json(category);
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: "Internal server error" });
	}
}

function createCategory(req, res) {
	try {
		const { name, description } = req.body;
		if (!name) {
			return res.status(400).json({ message: "Name is required." });
		}

		const db = loadDB();
		const newCategory = {
			id: `cat_${Date.now()}`,
			name,
			description: description || "",
		};
		db.categories.push(newCategory);
		saveDB(db);

		res.status(201).json(newCategory);
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: "Internal server error" });
	}
}

function updateCategory(req, res) {
	try {
		const { id } = req.params;
		const { name, description } = req.body;

		const db = loadDB();
		const catIndex = db.categories.findIndex((cat) => cat.id === id);
		if (catIndex === -1) {
			return res.status(404).json({ message: "Category not found." });
		}

		if (name !== undefined) db.categories[catIndex].name = name;
		if (description !== undefined)
			db.categories[catIndex].description = description;

		saveDB(db);

		res.json(db.categories[catIndex]);
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: "Internal server error" });
	}
}

function deleteCategory(req, res) {
	try {
		const { id } = req.params;
		const db = loadDB();

		const catIndex = db.categories.findIndex((cat) => cat.id === id);
		if (catIndex === -1) {
			return res.status(404).json({ message: "Category not found." });
		}

		db.categories.splice(catIndex, 1);
		saveDB(db);

		res.json({ message: "Category deleted." });
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: "Internal server error" });
	}
}

module.exports = {
	getAllCategories,
	getCategoryById,
	createCategory,
	updateCategory,
	deleteCategory,
};
