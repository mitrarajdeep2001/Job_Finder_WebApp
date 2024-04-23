const User = require("../database/models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sendMail = require("../nodemailer");
require("dotenv").config();

const register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      companyName,
      password,
      userType,
      ipAddress,
    } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      firstName,
      lastName,
      companyName,
      email,
      password: hashedPassword,
      userType,
    });
    await newUser.save();

    //Send mail to the user
    const message = `Hello ${companyName ? companyName : ""} ${
      firstName ? firstName : ""
    } ${
      lastName ? lastName : ""
    },\n\nYou have successfully registered.\n\nIP Address: ${ipAddress.ip}`;
    await sendMail(email, message);
    res
      .status(201)
      .json({ message: "User registered successfully", ipAddress });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).send("Server Error");
  }
};

const login = async (req, res) => {
  try {
    const { email, password, userType } = req.body;

    // Check if user exists
    const user = await User.findOne({ email, userType });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check password
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    // Generate JWT token with user details
    const token = jwt.sign(
      {
        userId: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        companyName: user.companyName,
        email: user.email,
        userType: user.userType,
      },
      process.env.JWT_SECRETE_KEY,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).send("Server Error");
  }
};

module.exports = { register, login };
