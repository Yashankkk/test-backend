const express = require ("express");
const getAllUsers = require("../../controllers/auth/admindelete");

const router = express.Router();

router.route('/users').delete(getAllUsers);

module.exports = router;