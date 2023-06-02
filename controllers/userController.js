
const connection = require("../config/database")


const adminLogin = async (req, res) => {
	const email = req.body.email;
	const password = req.body.password;

	// console.log(req.body);
	console.log("email");
	if (!email) {
		res.json({ status: "error", message: "email missing" });
		return;
	}
	console.log("password");

	if (!password) {
		res.json({ status: "error", message: "password missing" });
		return;
	}
    // console.log(jsonParser)

    connection.query(`select * from users where email='${email}' and password='${password}'`, (error, resp, field) => {
        console.log("test",resp);
		if(resp.length < 1){
			res.json({ status: "error", message: "invalid credentials"});
     		return;
		}else{
			res.json({ status: "success", user: resp[0],Boolean:1 });

		}
    });
};



module.exports = {
	adminLogin,
};
