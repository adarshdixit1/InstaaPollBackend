const express = require("express");
const {addQuestion, showQuestion,delteQuestion} = require("../controllers/AddQuestionController");
const router = express.Router();

router.post("/addQuestion", addQuestion);
router.post("/showQuestion", showQuestion);
router.post("/delete", delteQuestion )


module.exports = router;