const nodemailer = require("nodemailer");
require("dotenv").config();
const { META_PASSWORD, USER, HOST, PORT } = process.env;

const sendEmail = async (data) => {
  try {
    const transport = nodemailer.createTransport({
      host: HOST,
      port: PORT,
      secure: true,
      auth: {
        user: USER,
        pass: META_PASSWORD,
      },
    });
    const email = { ...data, from: USER };
    await transport.sendMail(email);
    return true;
  } catch (e) {
    console.error("Error sending email:", e.message);
  }
};

module.exports = sendEmail;
