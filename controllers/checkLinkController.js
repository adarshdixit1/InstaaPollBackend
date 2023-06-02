
const connection = require("../config/database")
const constant = require("../config/constant")


const ValidatingLink = async (req, res) => {
let event_id = req.body.event_id;
console.log(event_id,"this is event id in valid link");

// sql qurey
const sql = `SELECT * FROM event_link where Event='${event_id}';`
try{
connection.query(sql,function(err,result){
    console.log(result)
    if(result.length <1){
        res.json({"message":"event not found",Boolean:0})
        return;
    }
    const data = result[0]

    let oldTime= data.CreatedDate.getTime();
    
    // To get timeperiod for expire a link
    let TotalHour= data.ExpiryTime*60*60*1000
    let ExpiryTime=oldTime+TotalHour

    // To get current time
    const currentTimeStamp = new Date();
    const currentTimiMili = currentTimeStamp.getTime();

    // Put a condition
    if(currentTimiMili>ExpiryTime){
        res.json({"message":"Link is expired",Boolean:0})
    }
    else{
        res.json({"message":"Link is valid",Boolean:1})
    }

    })}
    catch{
        res.json({"message":"Link is expired",Boolean:0})
    }


}


module.exports = {
	ValidatingLink
};