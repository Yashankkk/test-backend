const Booking = require("../../models/Bookings");

const updateBookingById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    console.log("Updating booking with ID:", id);
    console.log("New data:", updateData);

    const updatedBooking = await Booking.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedBooking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.status(200).json(updatedBooking);
  } catch (error) {
    console.error("Error updating Booking:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = updateBookingById;
