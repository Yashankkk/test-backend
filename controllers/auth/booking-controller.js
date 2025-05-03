const Booking = require("../../models/Bookings")

const getAllBookings = async(req, res, next) => {
    try {
        const carvalues = await(req.body);
        console.log("values ye hain", carvalues);

        const bookings = await Booking.find();
        console.log(bookings);
        if(!bookings) {
            return res.status(404).json({ message: "No bookings found" });
        }
        return res.status(200).json(bookings);
    } catch(error){
        console.error("Error fetching bookings",error);
        res.status(500).json ({ error: "Internal Server Error"});
        next(error);
    }
};

module.exports = getAllBookings;