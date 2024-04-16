const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  companyLogo: { type: String },
  jobTitle: { type: String, required: true },
  jobType: { type: String, required: true },
  salary: { type: Number, required: true },
  noOfVacancy: { type: Number, required: true },
  yearOfExp: { type: Number, required: true },
  location: { type: String, required: true },
  jobDesc: { type: String, required: true },
  jobResp: { type: String, required: true },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: { type: Date, default: new Date().toISOString() },
});

const Post = mongoose.model("post", postSchema);

module.exports = Post;
