const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true, trim: true},
    username: { type: String, required: true, unique: true, trim: true,},
    email: { type: String, required: true, unique: true, trim: true, lowercase: true,},
    phone: { type: String, required: true, unique: true,},
    password: { type: String, required: true,},
    confirm: { type: String, required: true,},
    isVerified: { type: Boolean, default: false,},
}, { timestamps: true });


module.exports = mongoose.model('User', userSchema);
