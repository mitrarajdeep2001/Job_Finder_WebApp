const Post = require("../database/models/postSchema");
const User = require("../database/models/userSchema");
require("dotenv").config();

// Function to create a post
const createPost = async (req, res) => {
  try {
    const {
      companyName,
      companyLogo,
      jobTitle,
      jobType,
      salary,
      noOfVacancy,
      yearOfExp,
      location,
      jobDesc,
      aboutCompany,
      user_id,
    } = req.body;
    // Create a new post using the Post model
    const newPost = new Post({
      companyName,
      companyLogo,
      jobTitle,
      jobType,
      salary,
      noOfVacancy,
      yearOfExp,
      location,
      jobDesc,
      aboutCompany,
      postedBy: user_id, // Assuming user_id is the ID of the user who created the post
    });

    // Save the new post to the database
    await newPost.save();

    // Update the user's jobPosts field with the ID of the newly created post
    await User.findByIdAndUpdate(
      user_id,
      { $push: { jobPosts: newPost._id } },
      { new: true }
    );

    res
      .status(201)
      .json({ message: "Job Post created successfully", post: newPost });
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).send("Server Error");
  }
};

// Function to get all posts
const getPosts = async (req, res) => {
  const page = parseInt(req.query.page) || 1; // Current page number (default to 1)
  const limit = parseInt(req.query.limit) || 3; // Number of items per page (default to 10)

  try {
    const posts = await Post.find()
      .skip((page - 1) * limit) // Skip items based on page number
      .limit(limit); // Limit the number of items per page

    const totalPosts = await Post.find().countDocuments(); // Total number of posts

    res.status(200).json({
      totalPosts,
      totalPages: Math.ceil(totalPosts / limit), // Calculate total pages
      currentPage: page,
      posts,
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Function to get all posts by a specific user
const getPostsById = async (req, res) => {
  try {
    const { user_id } = req.params;
    const page = parseInt(req.query.page) || 1; // Current page number (default to 1)
    const limit = parseInt(req.query.limit) || 3; // Number of items per page (default to 10)

    // Calculate the skip value based on the page and limit
    const skip = (page - 1) * limit;

    // Find all posts by the specified user ID with pagination
    const posts = await Post.find({ postedBy: user_id })
      .skip(skip)
      .limit(limit);

    const totalPosts = await Post.find({ postedBy: user_id }).countDocuments(); // Total number of posts
    res.status(200).json({
      totalPosts,
      totalPages: Math.ceil(totalPosts / limit), // Calculate total pages
      currentPage: page,
      posts,
    });
  } catch (error) {
    console.error("Error fetching posts by user ID:", error);
    res.status(500).send("Server Error");
  }
};

// Function to get a specific post by id
const getPostById = async (req, res) => {
  try {
    const postId = req.params.id; // Assuming the post ID is passed in the URL parameters

    // Find the post by ID using Mongoose
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json(post);
  } catch (error) {
    console.error("Error fetching post by ID:", error);
    res.status(500).send("Server Error");
  }
};


module.exports = { getPostsById };

module.exports = { createPost, getPosts, getPostsById, getPostById };
