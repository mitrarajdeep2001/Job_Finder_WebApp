const express = require("express");
const cookieParser = require("cookie-parser");
const connectToDatabase = require("./database/config");
const authRouter = require("./Routers/auth");
const postRouter = require("./Routers/post");

// Function to start the server
function startServer() {
  const app = express();
  const PORT = process.env.PORT || 3000;

  // Middleware
  app.use(express.json()); // Parse JSON bodies
  app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
  app.use(cookieParser()); // Use cookie-parser middleware

  // Custom CORS middleware function
  const handleCorsError = (req, res, next) => {
    // List of allowed origins separated by commas
    const allowedOrigins = [
      "http://localhost:5173",
      "https://job-finder-web-app-nu.vercel.app",
      "https://job-finder-web-nmqp5m4vw-mitrarajdeep2001s-projects.vercel.app",
      // Add more origins as needed
    ];

    // Get the request origin
    const requestOrigin = req.headers.origin;

    // Check if the request origin is in the list of allowed origins
    if (allowedOrigins.includes(requestOrigin)) {
      // Set the Access-Control-Allow-Origin header to the request origin
      res.setHeader("Access-Control-Allow-Origin", requestOrigin);
    }

    // Set other CORS headers
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, PATCH, DELETE, OPTIONS"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );
    res.setHeader("Access-Control-Allow-Credentials", "true");

    // Check if it's a preflight request
    if (req.method === "OPTIONS") {
      res.sendStatus(200); // Respond with 200 OK for preflight requests
    } else {
      next(); // Continue to the next middleware
    }
  };

  // Using the custom CORS middleware
  app.use(handleCorsError); // Add the custom middleware before your routes

  // Connect to MongoDB
  connectToDatabase();

  // Routes
  app.use("/auth", authRouter);
  app.use("/post", postRouter);
  app.use("/", (req, res) => {
    res.send("Welcome!");
  });

  // Start the server
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

// Call the startServer function to start the server
startServer();
