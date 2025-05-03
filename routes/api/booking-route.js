const express = require('express');

const getAllBookings = require('../../controllers/auth/booking-controller');

const router = express.Router();

router.route('/bookings').get(getAllBookings);

module.exports = router;