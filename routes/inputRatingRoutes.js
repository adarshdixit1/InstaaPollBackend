const express = require("express");
const {ParticipantNameForRating, inputRating} = require("../controllers/InputRatingController");
const router = express.Router();

router.post("/participantName", ParticipantNameForRating);
router.post("/eventRating",inputRating)

module.exports = router;