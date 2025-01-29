// src/middlewares/authMiddleware.js
const { verifyToken } = require("../utils/jwt");
const { loadDB } = require("../utils/fileDb");

function authMiddleware(req, res, next) {
	const authHeader = req.headers["authorization"];
	if (!authHeader) {
		return res.status(401).json({ message: "No token provided." });
	}

	const token = authHeader.split(" ")[1]; // "Bearer <token>"

	const decoded = verifyToken(token);
	if (!decoded) {
		return res.status(401).json({ message: "Invalid token." });
	}

	// Token is valid; attach user to request
	const db = loadDB();
	const user = db.users.find((u) => u.id === decoded.userId);
	if (!user) {
		return res.status(404).json({ message: "User not found." });
	}
	req.user = user; // attach the user to the request
	next();
}

module.exports = authMiddleware;
