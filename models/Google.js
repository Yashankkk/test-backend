const mongoose = require('mongoose');

const googleschema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
}, {timestamps:true});

const Google = mongoose.model("Google", googleschema)

module.exports = Google;