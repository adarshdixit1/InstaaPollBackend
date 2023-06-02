const express = require("express");
const {getPartyDetails,count} = require("../controllers/dashboardController");
const router = express.Router();

router.post("/party_detail", getPartyDetails);
router.post("/count", count);


module.exports = router;