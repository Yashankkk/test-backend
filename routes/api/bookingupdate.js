const express = require('express');

const updateBookingById = require('../../controllers/auth/bookingupdate');

const router = express.Router();

router.put('/bookingupdate/:id', updateBookingById);

module.exports = router;