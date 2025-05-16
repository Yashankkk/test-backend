const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // make sure 'uploads' folder exists
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

router.post('/submit-report', upload.array('files'), async (req, res) => {
  try {
    const { issueType, subject, description, bookingId, issueDate } = req.body;
    const fileNames = req.files?.map(file => file.filename);

    console.log("Form Data Received:", req.body);
    console.log("Files:", fileNames);

    // Save to database here if needed

    res.status(200).json({ message: 'Report submitted successfully!' });
  } catch (error) {
    console.error('Backend error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
