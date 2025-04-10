const router = require("express").Router();

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

router.post("/registration", register);
router.post("/login", loginform);
router.post("/contact", contactme);
router.post("/google", google);

router.get("/admin", admin);

router.delete("/admindelete/:Id", admindelete);

router.put("/adminupdate/:Id", adminupdate);

router.get("/message",message);

router.delete("/messagedelete/:Id", messagedelete);

router.put("/messageupdate/:Id", messageupdate)


module.exports = router;