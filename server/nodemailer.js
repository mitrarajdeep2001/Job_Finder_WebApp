const nodemailer = require("nodemailer");
require("dotenv").config()

async function sendMail(
  email,
  message
) {
  // Send registration email using Gmail SMTP
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_ADMIN_EMAIL_ID, // Your Gmail address
      pass: process.env.NODEMAILER_ADMIN_PASSWORD, // Your Gmail App password
    },
  });

  const mailOptions = {
    from: {
      name: "Admin@Jobs24x7",
      address: process.env.NODEMAILER_ADMIN_EMAIL_ID,
    }, // Sender email address (Gmail)
    to: email, // Receiver email address (user's email)
    subject: "Registration Successful",
    text: message,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Registration email sent:", info.response);
  } catch (error) {
    console.error("Error sending registration email:", error);
    res.status(500).send("Error sending registration email");
  }
}

module.exports = sendMail;
