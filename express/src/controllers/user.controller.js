// src/controllers/user.controller.js
const { loadDB, saveDB } = require("../utils/fileDb");

function getMe(req, res) {
	// Remove password from the response
	const { password, ...userWithoutPassword } = req.user;
	res.json(userWithoutPassword);
}

function updateMe(req, res) {
	try {
		const { name, phoneNumber, gender, password } = req.body;
		const db = loadDB();

		const userIndex = db.users.findIndex((u) => u.id === req.user.id);
		if (userIndex === -1) {
			return res.status(404).json({ message: "User not found." });
		}

		if (name !== undefined) db.users[userIndex].name = name;
		if (phoneNumber !== undefined)
			db.users[userIndex].phoneNumber = phoneNumber;
		if (gender !== undefined) db.users[userIndex].gender = gender;
		// store plain text password
		if (password) {
			db.users[userIndex].password = password;
		}

		saveDB(db);

		const { password: _, ...updatedUser } = db.users[userIndex];
		res.json(updatedUser);
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: "Internal server error" });
	}
}

// Admin-only route
function getAllUsers(req, res) {
	try {
		const db = loadDB();
		// Return all users, but remove password from each
		const usersWithoutPasswords = db.users.map((u) => {
			const { password, ...rest } = u;
			return rest;
		});
		res.json(usersWithoutPasswords);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
}

module.exports = {
	getMe,
	updateMe,
	getAllUsers,
};
