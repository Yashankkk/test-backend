const express = require(" express ");
const getAllContacts = require("../../controllers/auth/messageupdate");

const router = express.Router();

router.route("/contacts").put(getAllContacts);

module.exports = getAllContacts;