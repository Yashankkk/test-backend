const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  email: { type: String, required: true },
  carModel: { type: String, required: true },
  pickupLocation: { type: String, required: true },
  dropoffLocation: { type: String, required: true },
  pickupDate: { type: String, required: true },
  returnDate: { type: String, required: true },
  pricePerDay: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);
