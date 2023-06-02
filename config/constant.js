const dotenv = require("dotenv");
dotenv.config();

 const DB = process.env.DB;
const USER_DB = process.env.USER_DB;
const PASSWORD_DB = process.env.PASSWORD_DB;
module.exports = {
	DB,
	USER_DB,
	PASSWORD_DB
}