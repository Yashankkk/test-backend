const router = require("express").Router();
const authRoutes = require("./Auth.route");


router.use("/auth", authRoutes);
router.use("/review", require("./review-route"));
router.use('/report', require('./report-route')); 

router.get("/ping", (req, res) => {
  res.json({ success: "true", message: "successful request" });
});

module.exports = router;
