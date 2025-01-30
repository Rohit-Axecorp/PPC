const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Root route
app.get("/", (req, res) => {
    res.send("Backend server is running!");
});

// Email sending route (example)
app.post("/send-email", (req, res) => {
    const { name, email, phone, description } = req.body;

    const transporter = nodemailer.createTransport({
        host: 'londonbookpublishers.com', // Replace with your cPanel SMTP host (e.g., smtp.yourdomain.com)
        port: 465,  // Use 465 for secure connection (SSL)
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'info@londonbookpublishers.com',  // Replace with your Namecheap cPanel email
            pass: 'qVJ}D_U$8GzX',  // Replace with the password for your Namecheap email
        },
    });

    const mailOptions = {
        from: email,
        to: "singhaniarohitram77@gmail.com", // Replace with the actual recipient's email
        subject: `New message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${description}`, // Include all details
    };

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error while sending email:', error);
        // Send error response with the error message
        res.status(500).json({ message: 'An error occurred while sending the email.' });
    } else {
        console.log('Email sent successfully:', info.response);
        // Send success response back to the front-end
        res.status(200).json({ message: 'Email sent successfully!' });
    }
});



// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});