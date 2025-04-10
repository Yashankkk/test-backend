const router = require("express").Router();

const register = require("../../controllers/auth/registration");
const loginform = require('../../controllers/auth/login');
const contactme= require('../../controllers/auth/contact');
const google = require("../../controllers/auth/google");
const admin  = require("../../controllers/auth/admin-controller");
const admindelete = require("../../controllers/auth/admindelete");
const adminupdate = require("../../controllers/auth/adminupdate");

router.post("/registration", register);
router.post("/login", loginform);
router.post("/contact", contactme);
router.post("/google", google);
router.get("/admin", admin)
router.delete("/admindelete/:Id", admindelete)
router.put("/adminupdate/:Id", adminupdate)

module.exports = router;