const express = require("express");
const router = express.Router();
const { createPost } = require("../Controllers/post");

// Route to create a new post
router.post("/create", createPost);

module.exports = router;
