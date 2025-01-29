// src/routes/order.routes.js
const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");

const {
	getOrders,
	getOrderById,
	createOrder,
} = require("../controllers/order.controller");

router.use(authMiddleware);

router.get("/", getOrders);
router.get("/:orderId", getOrderById);
router.post("/", createOrder);

module.exports = router;
