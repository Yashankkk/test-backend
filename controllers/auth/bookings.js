const Booking = require("../../models/Bookings");

const createBooking = async (req, res) => {
  try {
    const {
      carmodel,
      pickupLocation,
      dropoffLocation,
      pickupDate,
      returnDate,
      pickupTime,
      returnTime,
      pricePerDay,
      specs,
      image, // now coming as a string (URL)
    } = req.body;

    const specArray = Array.isArray(specs) ? specs : specs ? [specs] : [];

    if (!carmodel || !pickupLocation || !dropoffLocation || !pickupDate || !returnDate || !pricePerDay ) {
      return res.status(400).json({ error: 'All fields including image URL are required' });
    }

    const newBooking = new Booking({
      carmodel,
      pickupLocation,
      dropoffLocation,
      pickupDate,
      returnDate,
      pickupTime,
      returnTime,
      pricePerDay,
      specs: specArray,
      image, // save URL string
    });

    await newBooking.save();
    res.status(201).json({ message: 'Booking created successfully' });
  } catch (err) {
    console.error('Booking error:', err);
    res.status(500).json({ error: 'Server error while creating booking' });
  }
};


module.exports = createBooking;