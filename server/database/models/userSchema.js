const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  companyName: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  userType: { type: String, required: true },
  jobPosts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post", required: true }],
  createdAt: { type: Date, default: new Date().toISOString() },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
