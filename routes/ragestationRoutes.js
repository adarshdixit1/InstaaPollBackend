const express = require("express");
const {ragestation} = require("../controllers/ragesterController");
const router = express.Router();

router.post("/ragister", ragestation);


module.exports = router;