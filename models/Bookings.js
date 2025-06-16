const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  carmodel: String,
  pickupLocation: String,
  dropoffLocation: String,
  pickupDate: String,
  returnDate: String,
  pickupTime: String,
  returnTime: String,
  pricePerDay: Number,
  specs: [String],
  image: String, // Or use String if storing Cloudinary URL
});

const booking = mongoose.model('Booking', bookingSchema);

module.exports = booking;
