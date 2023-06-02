const connection = require("../config/database")

const ParticipantNameForRating=(req,res)=>{
     // console.log(req,"this is nodejs data")
    // console.log(req.body.user_id,"this is nodejs data")
    // res.json("test");
    const data= req.body.event_id
    // console.log(req.body,"this is input name for rating")
    const sql=`SELECT * FROM events where Id=${data};`
    let participantsDetail;
    let eventDetail;
    const participant=`SELECT * FROM participants where Event=${data};`
    // data = {};
    connection.query(sql,function(err,result){
        eventDetail = result[0]
    })
    connection.query(participant,function(err,result){
        participantsDetail = result
        res.json({eventDetail : eventDetail, participantsDetail : participantsDetail})
    })

}
// app.post("/participantName",(req,res)=>{
   
// })

const inputRating=(req,res)=>{
    for(i=0;i<req.body.ratingValue.length;i++){
        console.log(req.body.ratingValue.length,"this is length value",i)
        let Participant=req.body.participantId[i].Id
        console.log(Participant)
        let RatingPoint=req.body.ratingValue[i]
        console.log(RatingPoint)

        // Enter data into database
  const sql = 'insert into rating  (Participant,RatingPoint) values(?, ?)';

  connection.query(
    sql,
    [Participant,RatingPoint],
    function (err, results) {
          console.log(results, "this is result");
          console.log(err, "this is error")
    });
    }
    res.json({ status: "success", message: "Rating is submitted" });
}
// app.post("/eventRating", (req, res) => {
//     console.log("hello", req.body)
// })
    
module.exports = {
    ParticipantNameForRating,
    inputRating
};