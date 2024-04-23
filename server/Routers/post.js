const express = require("express");
const router = express.Router();
const {
  createPost,
  getPostsById,
  getPosts,
  getPostById,
} = require("../Controllers/post");

// Route to create a new post
router.post("/create", createPost);

// Route to get all posts
router.get("/getPosts", getPosts);

// Route to get all posts by a user
router.get("/getPosts/:user_id", getPostsById);

// Route to get a specific post by id
router.get("/getPost/:id", getPostById);

module.exports = router;
