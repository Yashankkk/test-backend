const express = require(" express ");
const updateUserById = require("../../controllers/auth/messageupdate");

const router = express.Router();

router.route("/adminupdate/:id").put(updateUserById);

module.exports = router;