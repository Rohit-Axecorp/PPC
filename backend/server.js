const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = 5000;
require("dotenv").config();
// Middleware
app.use(bodyParser.json());
app.use(cors());

// Root route
app.get("/", (req, res) => {
  res.send("Backend server is running!");
});

// Email sending route (example)
app.post("/send-email", async (req, res) => {
  const { name, email, phone, description } = req.body;

  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT;
  const user = process.env.SMTP_USERNAME;
  const pass = process.env.SMTP_PASSWORD;
  console.log("host");
  console.log(host);
  console.log("port");
  console.log(port);
  console.log("user");
  console.log(user);
  const email_message = `Hello ${name}!

    We received your message and would like to thank you for reaching out to us. Here's the information you submitted:
    
    - **Name**: ${name}
    - **Email**: ${email}
    - **Phone**: ${phone}
    - **Description**: ${description}
    
    We will get back to you soon with more details. If you have any further questions, feel free to reach out.
    
    Best regards,
    Your Company Name
    `;
  // Create a transporter object using SMTP transport
  const transporter = nodemailer.createTransport({
    host: host, // Replace with your SMTP host
    port: port, // Set the appropriate port
    auth: {
      user: user, // Replace with your SMTP username
      pass: pass, // Replace with your SMTP password
    },
  });

  try {
    // Send email
    const info = await transporter.sendMail({
      from: email, // Replace with the sender's email
      to: user, // List of recipients
      subject: "Reaching from website london book publisher", // Use service as the subject line
      text: email_message, // Plain text body
    });

    console.log("Message sent: %s", info.messageId);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res
      .status(500)
      .json({ message: "Failed to send email", error: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
