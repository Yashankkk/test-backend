const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

const sendotp= async (req, res) => {
  const { email, otp } = req.body;

  let config = {
    service: "gmail",
    auth: {
      user: "yashankkalsi947@gmail.com",
      pass: "wafwepvjaxstoont",
    },
  };

  let transporter = nodemailer.createTransport(config);

  let message = {
    from: "yashankkalsi947@gmail.com",
    to: email,
    subject: "Your OTP",
    text: `Your OTP is: ${otp}`,
    html: `<b>Your OTP is: ${otp}</b>`,
  };

  try {
    await transporter.sendMail(message);
    return res.status(200).json({
      msg: "OTP sent to your email successfully!",
      email: email,
      success: true,
    });
  } catch (error) {
    console.error("error" , error)
    return res.status(500).json({ error: "Failed to send OTP", details: error });
  }
};

module.exports = sendotp
