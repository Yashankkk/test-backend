const express = require ("express");
const getAllUsers = require("../../controllers/auth/adminupdate");

const router = express.Router();

router.route('/users').put(getAllUsers);

module.exports = router;