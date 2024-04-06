const express = require("express");
const router = express.Router();
const { register, login } = require("../Controllers/auth");

// Route to register a new user
router.post("/register", register);

// Route to login
router.post("/login", login);

module.exports = router;
