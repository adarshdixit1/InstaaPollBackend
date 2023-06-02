const { application } = require("express");
const express = require("express");
const router = express.Router();
const { adminLogin } = require("../controllers/userController");

// router.post("/signup", formValidator, addUser);
router.post("/login", adminLogin);
module.exports = router;
