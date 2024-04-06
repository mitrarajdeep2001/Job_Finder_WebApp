const express = require("express");
const router = express.Router();
const { createPost, getPostsById } = require("../Controllers/post");

// Route to create a new post
router.post("/create", createPost);

// Route to get all posts
router.post("/getPosts")

// Route to get all posts by a user
router.get("/getPosts/:user_id", getPostsById)


module.exports = router;
