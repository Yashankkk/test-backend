const mongoose = require("mongoose");

const carinfoschema = new mongoose.Schema({
    body: { type: String, required: true },
    seat: { type: String, required: true },
    fuel: { type: String, required: true },
    engine: { type: String, required: true },
    transmission: { type: String, required: true },
    average: { type: String, required: true },
}, { timestamps: true });

const car = mongoose.model("car", carinfoschema);

module.exports = car;