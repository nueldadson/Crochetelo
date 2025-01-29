// src/controllers/cart.controller.js
const { loadDB, saveDB } = require("../utils/fileDb");

function getCart(req, res) {
	const { cart } = req.user;
	res.json(cart);
}

function addToCart(req, res) {
	try {
		const { productId, quantity } = req.body;
		if (!productId || !quantity) {
			return res
				.status(400)
				.json({ message: "productId and quantity are required." });
		}

		const db = loadDB();
		const userIndex = db.users.findIndex((u) => u.id === req.user.id);

		const cartItems = db.users[userIndex].cart.items;
		const existingItem = cartItems.find((item) => item.productId === productId);

		if (existingItem) {
			existingItem.quantity += quantity;
		} else {
			cartItems.push({ productId, quantity });
		}

		saveDB(db);

		res.json({
			message: "Item added to cart.",
			cart: db.users[userIndex].cart,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
}

function updateCartItem(req, res) {
	try {
		const { productId } = req.params;
		const { quantity } = req.body;

		if (!quantity) {
			return res.status(400).json({ message: "quantity is required." });
		}

		const db = loadDB();
		const userIndex = db.users.findIndex((u) => u.id === req.user.id);
		if (userIndex === -1) {
			return res.status(404).json({ message: "User not found." });
		}

		const cartItems = db.users[userIndex].cart.items;
		const item = cartItems.find((it) => it.productId === productId);
		if (!item) {
			return res.status(404).json({ message: "Item not in cart." });
		}

		item.quantity = quantity;
		saveDB(db);

		res.json({ message: "Cart updated.", cart: db.users[userIndex].cart });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
}

function removeCartItem(req, res) {
	try {
		const { productId } = req.params;

		const db = loadDB();
		const userIndex = db.users.findIndex((u) => u.id === req.user.id);
		if (userIndex === -1) {
			return res.status(404).json({ message: "User not found." });
		}

		let cartItems = db.users[userIndex].cart.items;
		cartItems = cartItems.filter((it) => it.productId !== productId);
		db.users[userIndex].cart.items = cartItems;

		saveDB(db);
		res.json({
			message: "Item removed from cart.",
			cart: db.users[userIndex].cart,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
}

module.exports = {
	getCart,
	addToCart,
	updateCartItem,
	removeCartItem,
};
