// src/utils/jwt.js
const jwt = require("jsonwebtoken");

const SECRET = process.env.JWT_SECRET || "dev_secret_key";

function signToken(user) {
	// Include role & email in token payload
	return jwt.sign(
		{ userId: user.id, email: user.email, role: user.role },
		SECRET,
		{ expiresIn: "1d" },
	);
}

function verifyToken(token) {
	try {
		return jwt.verify(token, SECRET);
	} catch (err) {
		return null;
	}
}

module.exports = {
	signToken,
	verifyToken,
};
