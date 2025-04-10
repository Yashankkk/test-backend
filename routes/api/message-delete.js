const express = require("express");
const getAllContacts = require("../../controllers/auth/messagedelete");

const router = express.Router();

router.route("/contacts").delete(getAllContacts);

module.exports = getAllContacts;