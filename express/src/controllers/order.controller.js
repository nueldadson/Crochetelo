// src/controllers/order.controller.js
const { loadDB, saveDB } = require("../utils/fileDb");

function getOrders(req, res) {
	try {
		const db = loadDB();

		// If user is admin, return all orders
		if (req.user.role === "admin") {
			return res.json(db.orders);
		}

		// Otherwise, return only the orders belonging to this user
		const userOrders = db.orders.filter((o) => o.userId === req.user.id);
		res.json(userOrders);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
}

function getOrderById(req, res) {
	try {
		const { orderId } = req.params;
		const db = loadDB();

		const order = db.orders.find((o) => o.id === orderId);

		if (!order) {
			return res.status(404).json({ message: "Order not found." });
		}

		// Admin can see any order; user can see only their own
		if (req.user.role !== "admin" && order.userId !== req.user.id) {
			return res
				.status(403)
				.json({ message: "Not authorized to view this order." });
		}

		res.json(order);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
}

function createOrder(req, res) {
	try {
		const db = loadDB();
		const userIndex = db.users.findIndex((u) => u.id === req.user.id);
		if (userIndex === -1) {
			return res.status(404).json({ message: "User not found." });
		}

		const user = db.users[userIndex];
		const cartItems = user.cart.items;

		if (cartItems.length === 0) {
			return res.status(400).json({ message: "Cart is empty." });
		}

		// In a real app, you'd do Paystack payment initiation/verification here
		// For now, assume payment is successful

		const newOrder = {
			id: `order_${Date.now()}`,
			userId: user.id,
			transactionId: "dummy_paystack_ref",
			products: cartItems.map((item) => ({
				productId: item.productId,
				quantity: item.quantity,
				// optionally store a "priceAtPurchase"
			})),
			status: "paid",
			createdAt: new Date().toISOString(),
			paymentDetails: {
				provider: "paystack",
				reference: "dummyReference123",
				status: "success",
				channel: "card",
				currency: "NGN",
				amount: 999.99, // you'd calculate this
				metadata: {},
			},
		};

		db.orders.push(newOrder);
		// Clear the user cart
		db.users[userIndex].cart.items = [];

		saveDB(db);

		res.status(201).json({ message: "Order created.", order: newOrder });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
}

module.exports = {
	getOrders,
	getOrderById,
	createOrder,
};
