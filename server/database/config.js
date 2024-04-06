const mongoose = require('mongoose');
require("dotenv").config()

// Function to establish MongoDB connection
async function connectToDatabase() {
  try {
    const username = encodeURIComponent(process.env.DB_USERNAME)
    const password = encodeURIComponent(process.env.DB_PASSWORD)
    await mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.8sbxwji.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/Jobs_Finder_App`);
    console.log('Connected to Database');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
}

module.exports = connectToDatabase;
