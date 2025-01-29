// src/routes/cart.routes.js
const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");

const {
	getCart,
	addToCart,
	updateCartItem,
	removeCartItem,
} = require("../controllers/cart.controller");

// All cart routes require authentication
router.use(authMiddleware);

router.get("/", getCart);
router.post("/", addToCart);
router.patch("/:productId", updateCartItem);
router.delete("/:productId", removeCartItem);

module.exports = router;
