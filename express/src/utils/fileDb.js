// src/utils/fileDb.js
const fs = require("fs");
const path = require("path");

const DB_PATH = path.join(__dirname, "../../db.json");

function loadDB() {
	const data = fs.readFileSync(DB_PATH, "utf-8");
	return JSON.parse(data);
}

function saveDB(db) {
	fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2), "utf-8");
}

module.exports = {
	loadDB,
	saveDB,
};
