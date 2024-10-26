const { sendEmail } = require('../helpers/emailHelper'); // Use require instead of import
const { verifyRecaptcha } = require('../helpers/recaptchaHelper'); // Use require instead of import

const contactController = async (req, res) => {
  const { name, add1, add2, city, state, zip, phone, fax, email, message, captchaValue } = req.body;
  
  // Verify reCAPTCHA
  const isRecaptchaValid = await verifyRecaptcha(captchaValue);
  if (!isRecaptchaValid) {
    return res.status(400).json({ message: 'reCAPTCHA verification failed' });
  }

  // Prepare the email
  const emailSubject = 'Contact Us Submission';
  const emailText = `
  <html>
    <body style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2 style="color: #333;">New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Address1:</strong> ${add1}</p>
      <p><strong>Address2:</strong> ${add2}</p>
      <p><strong>City:</strong> ${city}</p>
      <p><strong>State:</strong> ${state}</p>
      <p><strong>ZipCode:</strong> ${zip}</p>
      <p><strong>Fax:</strong> ${fax}</p>
      <p><strong>Message:</strong><br>${message}</p>
      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
      <p style="color: #888; font-size: 12px;">This message was sent from your website.</p>
    </body>
  </html>
  `;

  try {
    await sendEmail(email, emailSubject, emailText);
    res.status(200).json({ message: 'Contact form message sent successfully' });
  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({ message: 'Failed to send contact form message' });
  }
};

module.exports = { contactController }; // Export using CommonJS
