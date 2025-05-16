// models/Report.model.js
const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
  issueType: { type: String, required: true },
  subject: { type: String, required: true },
  description: { type: String, required: true },
  bookingId: { type: String },
  issueDate: { type: Date },
  files: [{ type: String }], // store file paths or URLs
}, { timestamps: true });

module.exports = mongoose.model('Report', ReportSchema);
