async function verifyRecaptcha(captchaValue) {
  // Dynamically import node-fetch
  const fetch = (await import('node-fetch')).default; // Use dynamic import to load node-fetch

  const secretKey = process.env.RECAPTCHA_SECRET_KEY; // Use the environment variable
  const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `secret=${secretKey}&response=${captchaValue}`,
  });

  const data = await response.json();
  return data.success;
}

module.exports = { verifyRecaptcha }; // Export using CommonJS
