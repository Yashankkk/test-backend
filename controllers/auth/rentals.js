const Rental = require("../../models/Rentals");

const rental = async (req, res, next) => {
    try{
        const rentalValues = await (req.body);
        console.log("values ye hain", rentalValues);
        const { pickupLocation, dropoffLocation, rentDate, returnDate } = req.body;

        const rental = new Rental({
            pickupLocation,
            dropoffLocation,
            rentDate,
            returnDate
        });
        await rental.save();

        res.status(200).json({ 
            success: true, 
            message: "Rental created successfully", 
            data: rentalValues
        });
    } catch(error){
        next(error);
    }
};

module.exports = rental;