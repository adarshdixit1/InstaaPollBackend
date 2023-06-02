const connection = require("../config/database")

const ragestation= (req,res)=>{
    console.log("hello", req.body)
    const {name,email,password} = req.body;
    console.log(name,email,password);

    // Enter data into database
    const sql = 'insert into users (Name, Email, Password) values (?, ?, ?)';

    // with placeholder
    connection.query(
        sql,
        [name,email,password],
        function (err, results) {
            if (err) {
                data = { message: "error", Boolean: 0 }
                res.json(data)
            }
            else {
                data = { message: "Party is schedule", Boolean: 1 }
                res.json(data)
            }
              console.log(results, "this is result");
              console.log(err, "this is error")
        });
     
}
// app.post("/ragister", (req, res) => {
    
// })
module.exports = {
    ragestation
};