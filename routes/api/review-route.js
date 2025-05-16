const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const Review = require("../../models/Review.model");

// Configure Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // create this folder manually
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});
const upload = multer({ storage });

// POST /api/review
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { rating, feedback } = req.body;
    const imageUrl = req.file ? req.file.path : null;

    const review = new Review({ rating, feedback, imageUrl });
    await review.save();

    res.status(201).json({ message: "Review submitted", review });
  } catch (error) {
    console.error("Review Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
