const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
  issueType: { type: String, required: true },
  subject: { type: String, required: true },
  description: { type: String, required: true },
  bookingId: { type: String },
  issueDate: { type: Date },
  files: [{ type: String }],
}, { timestamps: true });

module.exports = mongoose.model('Report', ReportSchema);
