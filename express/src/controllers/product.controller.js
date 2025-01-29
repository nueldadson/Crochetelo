// src/controllers/product.controller.js
const { loadDB, saveDB } = require("../utils/fileDb");

function getAllProducts(req, res) {
	try {
		const db = loadDB();
		let products = db.products;

		// Optional filter by categoryId
		const { categoryId } = req.query;
		if (categoryId) {
			products = products.filter((prod) => prod.categoryId === categoryId);
		}

		res.json(products);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
}

function getProductById(req, res) {
	try {
		const { id } = req.params;
		const db = loadDB();

		const product = db.products.find((prod) => prod.id === id);
		if (!product) {
			return res.status(404).json({ message: "Product not found." });
		}

		res.json(product);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
}

function createProduct(req, res) {
	try {
		const {
			categoryId,
			name,
			description,
			price,
			stock,
			color,
			topSize,
			bottomSize,
		} = req.body;

		if (!categoryId || !name || price == null || stock == null) {
			return res.status(400).json({
				message: "categoryId, name, price, and stock are required.",
			});
		}

		const db = loadDB();
		const newProduct = {
			id: `prod_${Date.now()}`,
			categoryId,
			name,
			description: description || "",
			price,
			stock,
			color: color || null,
			topSize: topSize || null,
			bottomSize: bottomSize || null,
			createdAt: new Date().toISOString(),
			updatedAt: new Date().toISOString(),
		};

		db.products.push(newProduct);
		saveDB(db);

		res.status(201).json(newProduct);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
}

function updateProduct(req, res) {
	try {
		const { id } = req.params;
		const db = loadDB();

		const productIndex = db.products.findIndex((prod) => prod.id === id);
		if (productIndex === -1) {
			return res.status(404).json({ message: "Product not found." });
		}

		const {
			categoryId,
			name,
			description,
			price,
			stock,
			color,
			topSize,
			bottomSize,
		} = req.body;

		if (categoryId !== undefined)
			db.products[productIndex].categoryId = categoryId;
		if (name !== undefined) db.products[productIndex].name = name;
		if (description !== undefined)
			db.products[productIndex].description = description;
		if (price !== undefined) db.products[productIndex].price = price;
		if (stock !== undefined) db.products[productIndex].stock = stock;
		if (color !== undefined) db.products[productIndex].color = color;
		if (topSize !== undefined) db.products[productIndex].topSize = topSize;
		if (bottomSize !== undefined)
			db.products[productIndex].bottomSize = bottomSize;

		db.products[productIndex].updatedAt = new Date().toISOString();

		saveDB(db);

		res.json(db.products[productIndex]);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
}

function deleteProduct(req, res) {
	try {
		const { id } = req.params;
		const db = loadDB();

		const productIndex = db.products.findIndex((prod) => prod.id === id);
		if (productIndex === -1) {
			return res.status(404).json({ message: "Product not found." });
		}

		db.products.splice(productIndex, 1);
		saveDB(db);

		res.json({ message: "Product deleted successfully." });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
}

module.exports = {
	getAllProducts,
	getProductById,
	createProduct,
	updateProduct,
	deleteProduct,
};
