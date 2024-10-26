const nodemailer = require('nodemailer');

async function sendEmail(toEmail, subject, text) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER, // Your Gmail username
      pass: process.env.GMAIL_PASS, // Your Gmail password
    },
  });

  const mailOptions = {
    to: process.env.TO_RECEIVER,
    from: process.env.GMAIL_USER, // Your Gmail username
    subject: subject,
    html: text,
  };

  return transporter.sendMail(mailOptions);
}

module.exports = { sendEmail }; // Export the sendEmail function using CommonJS
