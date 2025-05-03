const express = require ("express");
const updateUserById = require("../../controllers/auth/adminupdate");

const router = express.Router();

router.route('/adminupdate/:id').put(updateUserById);

module.exports = router;