const express = require("express");
const router = express.Router();

const users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
  { id: 3, name: "Charlie", email: "charlie@example.com" },
];

// Get all users
router.get("/", (req, res) => {
  res.json(users);
});

module.exports = router;
