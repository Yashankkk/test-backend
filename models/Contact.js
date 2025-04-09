const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String, required: true },
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

const Contact = mongoose.model("Contact", contactSchema);

// Export the model so it can be used in other files
module.exports = Contact;
