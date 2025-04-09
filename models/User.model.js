const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true, trim: true},
    username: { type: String, required: true, unique: true, trim: true,},
    email: { type: String, required: true, unique: true, trim: true, lowercase: true,},
    phone: { type: String, required: true, unique: true,},
    password: { type: String, required: true,},
    confirm: { type: String, required: true,},
    isVerified: { type: Boolean, default: false,},
}, { timestamps: true });

// Export the User model
module.exports = mongoose.model('User', userSchema);
