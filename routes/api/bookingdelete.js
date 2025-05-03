const express = require("express");
const getAllBookings = require("../../controllers/auth/bookingdelete");

const router = express.Router();

router.route("/bookings").delete(getAllBookings);

module.exports = getAllBookings;