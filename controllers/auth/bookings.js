const Booking = require("../../models/Bookings");

const booking = async (req, res, next) => {
    try {
        const bookingvalues = await (req.body);
        console.log("values aa gu", bookingvalues);
        const { carModel, pickupLocation, dropoffLocation, pickupDate, returnDate, pricePerDay, image } = bookingvalues;
    
        const booking = new Booking({
          carModel,
          pickupLocation,
          dropoffLocation,
          pickupDate,
          returnDate,
          pricePerDay,
          // image
        });
        console.log("booking data", booking);
        await booking.save();

        res.status(201).json({message: "Booking created successfully!" });

      } catch (error) {
        console.error('Booking error:', error);
        res.status(500).json({ message: 'Failed to create booking' });
        next(error);
      }
    };

module.exports = booking;