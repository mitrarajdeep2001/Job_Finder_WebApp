const Post = require("../database/models/postSchema");
const User = require("../database/models/userSchema");
require("dotenv").config();

const createPost = async (req, res) => {
  try {
    const {
      jobTitle,
      jobType,
      salary,
      noOfVacancy,
      yearOfExp,
      location,
      jobDesc,
      jobResp,
      user_id
    } = req.body;
    // Create a new post using the Post model
    const newPost = new Post({
      jobTitle,
      jobType,
      salary,
      noOfVacancy,
      yearOfExp,
      location,
      jobDesc,
      jobResp,
      postedBy: user_id // Assuming user_id is the ID of the user who created the post
    });

    // Save the new post to the database
    await newPost.save();

    // Update the user's jobPosts field with the ID of the newly created post
    await User.findByIdAndUpdate(user_id, { $push: { jobPosts: newPost._id } }, {new: true});

    res.status(201).json({ message: "Job Post created successfully", post: newPost });
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).send("Server Error");
  }
};

module.exports = { createPost };