const mongoose = require('mongoose');

const rentalSchema = new mongoose.Schema({
    carId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Car',
        required: true
    },
    pickupLocation: {
        type: String,
        required: true
    },
    dropoffLocation: {
        type: String,
        required: true
    },
    rentDate: {
        type: Date,
        default: Date.now
    },
    returnDate: {
        type: Date,
    },
    // status: {
    //     type: String,
    //     enum: ['booked', 'returned', 'cancelled'],
    //     default: 'booked'
    // }
});

module.exports = mongoose.model('Rental', rentalSchema);