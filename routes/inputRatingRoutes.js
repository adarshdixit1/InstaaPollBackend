const express = require("express");
const {ParticipantNameForRating, inputRating, RaterCount} = require("../controllers/InputRatingController");
const router = express.Router();

router.post("/participantName", ParticipantNameForRating);
router.post("/eventRating",inputRating)
// router.post("/validateRater",validateRater)
router.post("/raterCount", RaterCount)

module.exports = router;