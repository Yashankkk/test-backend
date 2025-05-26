const express = require ("express");

const getAllReviews = require("../../controllers/auth/feedback-controller");

const router = express.Router();

router.route('/reviews').get(getAllReviews);

module.exports = router;