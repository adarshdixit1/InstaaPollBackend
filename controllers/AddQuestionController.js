const connection = require("../config/database")


const addQuestion = async (req, res) => {
	const event_id = req.body.event_id;
	const question = req.body.question;

	// console.log(req.body);
	// console.log("event_id");
	if (!event_id) {
		res.json({ status: "error", message: "event_id is missing" });
		return;
	}
	// console.log("question");

	if (!question) {
		res.json({ status: "error", message: "question is missing" });
		return;
	}
    // for question to database
    connection.query('insert into questiontable (Event,Question) values(?, ?)',[event_id,question], (error, resp, field) => {
        console.log("test",resp);
		if(resp.length < 1){
			res.json({ status: "error", message: "invalid credentials"});
     		return;
		}else{
			res.json({ status: "success", user: resp[0],Boolean:1 });

		}
    });



};

const showQuestion=(req,res)=>{
    const event =req.body.event_id;
    // console.log(event,"this is body")

    // if (!event) {
	// 	res.json({ status: "error", message: "event_id is missing" });
	// 	return;
	// }

    // res.json({ status: "error", message: "working is fine" });
    const sql=`SELECT * FROM questiontable where Event=${event}`

    connection.query(sql,function(err,result){
        // console.log(err)
        const data = result
        console.log(data)
        res.json(data)
    })
}



const delteQuestion=(req,res)=>{
    const QuestionId =req.body.question_id;

	const sql=`delete FROM questiontable where Id=${QuestionId}`

    connection.query(sql,function(err,result){
        console.log(err)
        const data = result
        // console.log(data)
        res.json(data)
    })
}



module.exports = {
	addQuestion,
    showQuestion,
	delteQuestion
};
