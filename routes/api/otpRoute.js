const express = require("express");

const router = express.Router();

const sendotp  = require("../../controllers/auth/otp-Controller");

router.post("/send-otp", sendotp);

module.exports = router;
