const express = require("express");
const app = express();
// const bodyparser = require('body-parser');s

const cors = require("cors");
app.use(cors());

// create application/json parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// loading environment variables
const dotenv = require("dotenv");
dotenv.config();

//Routes
app.use("/user", require("./routes/usersRoutes"));
app.use("/ragestation",require("./routes/ragestationRoutes"))
app.use("/dashboard",require("./routes/dashboardRoutes"));
app.use("/events",require("./routes/eventsRoutes"));
app.use("/inputRating",require("./routes/inputRatingRoutes"))
app.use("/validating-link",require("./routes/CheckLinkRoutes"))
app.use("/addQuestion",require("./routes/addQuestionRoutes"))



const constant = require("./config/constant");
const port = process.env.PORT || constant.PORT;
app.listen(port, console.log("app is running " + constant.PORT));
