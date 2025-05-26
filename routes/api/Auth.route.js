const router = require("express").Router();
const checkAuth = require('../../middlewares/checkAuth');

const register = require("../../controllers/auth/registration");
const loginform = require('../../controllers/auth/login');
const contactme= require('../../controllers/auth/contact');
const google = require("../../controllers/auth/google");
const admin  = require("../../controllers/auth/admin-controller");
const admindelete = require("../../controllers/auth/admindelete");
const adminupdate = require("../../controllers/auth/adminupdate");
const message = require("../../controllers/auth/message-controller");
const messagedelete = require("../../controllers/auth/messagedelete");
const messageupdate = require("../../controllers/auth/messageupdate");
const otp = require("../../controllers/auth/otp-Controller");
const bookings = require("../../controllers/auth/bookings");
const book = require('../../controllers/auth/booking-controller');
const bookingdelete = require('../../controllers/auth/bookingdelete');
const bookingupdate = require('../../controllers/auth/bookingupdate');
const CarNews = require('../../controllers/auth/news-controller');
const getAllReviews = require("../../controllers/auth/feedback-controller");

router.post("/registration", register);
router.post("/login", loginform);
router.post("/contact", contactme);
router.post("/google", google);

router.get("/admin", admin);
// router.route('/admin').get(checkAuth,admin);
router.delete("/admindelete/:Id", admindelete);
router.put("/adminupdate/:id", adminupdate);

router.get("/message",message);
router.delete("/messagedelete/:Id", messagedelete);
router.put("/messageupdate/:id", messageupdate);

router.post("/otp", otp);

router.post("/bookings", bookings)

router.get("/booking", book);
router.delete("/bookingdelete/:Id", bookingdelete);
router.put("/bookingupdate/:id", bookingupdate);

router.get("/news", CarNews);
router.get("/reviews", getAllReviews);

module.exports = router;