require('dotenv').config();
const nodemailer = require('nodemailer');

module.exports.sendEmail = async (event) => {
  try {
    console.log("Raw event.body:", event.body); // 🔍 Log input

    const body = JSON.parse(event.body);
    const { receiver_email, subject, body_text } = body;

    console.log("Parsed:", { receiver_email, subject, body_text }); // 🔍 Check parsed data
    console.log("ENV:", { EMAIL_USER: process.env.EMAIL_USER }); // 🔍 Check env vars

    if (!receiver_email || !subject || !body_text) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: receiver_email,
      subject,
      text: body_text,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error("❌ Error caught:", error); // 🪵 Log error
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};
