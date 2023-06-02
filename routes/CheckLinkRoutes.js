const { application } = require("express");
const express = require("express");
const router = express.Router();
const { ValidatingLink } = require("../controllers/checkLinkController");

// router.post("/signup", formValidator, addUser);
router.post("/validating-link",ValidatingLink)
module.exports = router;