const Booking = require('../../models/Bookings');

const getAllBookings= async(req, res, next) => {
    try{
        const { Id } = req.params
        console.log("values ye hain", Id);

        const bookings = await Booking.findOneAndDelete({"_id": Id});
        console.log(bookings);
        if(!bookings) {
            return res.status(404).json({ message: "No bookings found" });
        }
        return res.status(200).json(bookings);
    } catch(error){
        console.error("error",error);
        res.status(500).json ({ error: "Internal Server Error"});
        next(error);
    }
};

module.exports = getAllBookings;
    
