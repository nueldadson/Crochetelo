// src/controllers/auth.controller.js
const { loadDB, saveDB } = require("../utils/fileDb");
const { signToken } = require("../utils/jwt");

function register(req, res) {
	try {
		const { name, email, phoneNumber, gender, password } = req.body;
		if (!email || !password) {
			return res
				.status(400)
				.json({ message: "Email and password are required." });
		}

		const db = loadDB();
		const existingUser = db.users.find((u) => u.email === email);
		if (existingUser) {
			return res.status(400).json({ message: "Email already in use." });
		}

		// Create new user (plain text password for demonstration)
		const newUser = {
			id: `user_${Date.now()}`,
			name: name || "",
			email,
			phoneNumber: phoneNumber || "",
			gender: gender || "",
			password, // storing in plain text (not secure!)
			role: "user", // default role is 'user'
			cart: { items: [] },
		};

		db.users.push(newUser);
		saveDB(db);

		const token = signToken(newUser);
		res.status(201).json({ message: "User registered.", token });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
}

function login(req, res) {
	try {
		const { email, password } = req.body;
		if (!email || !password) {
			return res.status(400).json({ message: "Email and password required." });
		}

		const db = loadDB();
		const user = db.users.find((u) => u.email === email);
		if (!user || user.password !== password) {
			return res.status(400).json({ message: "Invalid credentials." });
		}

		const token = signToken(user);
		return res.status(200).json({ message: "Login successful.", token });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
}

module.exports = {
	register,
	login,
};
