//get client
const mysql = require("mysql2");

// import constant values like pass and username
// const constant = require("./constant");

// console.log(constant);
// create the connection to database
const connection = mysql.createConnection({
	host: 'localhost',
    user: 'root',
    database: 'instaapoll',
    password: '',
  });

module.exports = connection;
