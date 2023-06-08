const connection = require("../config/database")

const deleteEvent=(req,res)=>{
    // console.log("hello", req.body)
    const {event_id } = req.body;
    console.log( event_id);

    // Enter data into database
    const sql = `DELETE FROM events where Id='${event_id}' `

    // with placeholder
    connection.query(
        sql,
        [event_id],
        function (err, results) {
            if (err) {
                data = { message: "error", Boolean: 0 }
                res.json(data)
            }
            else {
                data = { message: "Evnet is deleted", Boolean: 1 }
                res.json(data)
            }
              console.log(results, "this is result");
              console.log(err, "this is error")
        }); 
        return;

}

const creatEventData= (req,res) => {
    // console.log("hello", req.body)
    const {User, Name, Place,Description,Date,Time} = req.body;

    if (!User) {
		res.json({ status: "error", message: "user missing" , Boolean: 0 });
		return;
	}
    if (!Name) {
		res.json({ status: "error", message: "Name missing" , Boolean: 0 });
		return;
	}
    if (!Place) {
		res.json({ status: "error", message: "Place missing" , Boolean: 0});
		return;
	}
    if (!Description) {
		res.json({ status: "error", message: "Description missing", Boolean: 0 });
		return;
	}
    if (!Date) {
		res.json({ status: "error", message: " Date missing", Boolean: 0 });
		return;
	}
    if (!Time) {
		res.json({ status: "error", message: "Time missing", Boolean: 0 });
		return;
	}
    // console.log( User,Name,Place,Description,Date,Time);

    // Enter data into database
    const sql = 'insert into events (User ,Name ,Description ,Place,StartDate, StartTime) values(?, ?, ?, ?, ?, ?)';

    // with placeholder
    connection.query(
        sql,
        [User,Name,Description,Place, Date, Time],
        function (err, results) {
            console.log(results)
            if (err) {
                data = { message: "error", Boolean: 0, }
                res.json(data)
            }
            else {
                data = { message: "Party is schedule", Boolean: 1 , Id:results.insertId}
                res.json(data)
            }
              console.log(results, "this is result");
              console.log(err, "this is error")
        }); 
        return;
}
// app.post("/party", (req, res) => { 
// })

const viewRating=(req,res)=>{
    console.log(req.body.event_id,"this is req.body")
    const sql=`SELECT p.Name, ROUND(AVG(r.RatingPoint),1) as Rating
    FROM participants p
    INNER JOIN rating r ON p.Id = r.Participant 
    where p.Event='${req.body.event_id}'
    GROUP BY p.Name
    order by Rating desc;`

    connection.query(sql,function(err,result){
        // console.log(err)
        const data = result
        console.log(data)
        res.json(data)
    })
}
// app.post("/rating",(req,res)=>{
//     //   let data=req.body
        
//     })

const addParticipants=(req,res)=>{
    // console.log("hello", req.body)
    const{Event,Name}=req.body;
    console.log(Event,Name)

    // Enter data into database
    const sql = 'insert into participants (Event,Name) values(?, ?)';
    const findParticipant=`SELECT * FROM participants where Name='${Name}' and Event='${Event}' `;
    
    // to find same name
    connection.query(
        findParticipant,
        function (err, results) {
                // To insert into participant table 
                try{
                    console.log(results[0].Name)
                let name =results[0].Name
                if(name==Name){
                    res.json({message:"this is error"})
                }
                }
                catch{
                    // res.json({data:"this is data"})
                    connection.query(
                    sql,
                    [Event,Name],
                    function (err, results) {
                        if (results) {
                            data = { message: "Member data for party is done", Boolean: 1 }
                            res.json(data)
                        }
                        else {
                            data = { message: "error", Boolean: 0 }
                            res.json(data)
                        }
                        // console.log(results);
                        console.log(err)
                    });
                }
            // console.log(results);
            console.log(err)
        });
    // with placeholder
   
}

// app.post("/Add_Member", (req, res) => {   
// })
const deleteParticipant=(req,res)=>{
    // console.log("hello", req.body)
    const {participantId } = req.body;
    console.log(participantId);

    // Enter data into database
    const sql = `delete from participants where Id='${participantId}'`

    // with placeholder
    connection.query(
        sql,
        [participantId],
        function (err, results) {
            if (err) {
                data = { message: "error", Boolean: 0 }
                res.json(data)
            }
            else {
                data = { message: "Participant is deleted", Boolean: 1 }
                res.json(data)
            }
              console.log(results, "this is result");
              console.log(err, "this is error")
        }); 
        return;

}

const showParticipants=(req,res)=>{
    const event =req.body.Event
    console.log(event)
    const sql=`SELECT * FROM participants where Event=${event} ORDER BY Name asc`

    connection.query(sql,function(err,result){
        console.log(err)
        const data = result
        console.log(data)
        res.json(data)
    })
}
// app.post("/participant",(req,res)=>{
    
// })

const InputCreatLink=(req,res)=>{
    console.log("hello", req.body)
    const {event_id, link, hour} = req.body;
    console.log( event_id, link, hour);

    // Enter data into database
    const sql = 'insert into event_link (Event, Link, ExpiryTime, IsExpired) values(?, ?, ?, ?)';

    // with placeholder
    connection.query(
        sql,
        [event_id,link,hour,0],
        function (err, results) {
            if (err) {
                data = { message: "error", Boolean: 0 }
                res.json(data)
            }
            else {
                data = { message: "Party is schedule", Boolean: 1 }
                res.json(data)
            }
            //   console.log(results, "this is result");
              console.log(err, "this is error")
        });
}
// app.post("/eventlink", (req, res) => {
    
// })

module.exports = {
    creatEventData,
    viewRating,
    addParticipants,
    showParticipants,
    InputCreatLink,
    deleteEvent,
    deleteParticipant
};