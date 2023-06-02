const connection = require("../config/database")

const getPartyDetails= (req,res)=>{
      // console.log(req,"this is nodejs data")
    // console.log(req.body.user_id,"this is nodejs data")
    // res.json("test");
    const data= req.body.user_id
    // console.log(data)
    const sql=`SELECT * FROM events where User=${data};`

    connection.query(sql,function(err,result){
        // console.log(err)
        const data = result
        // console.log(data)
        res.json(data)
    })
}
// app.post("/party_detail",(req,res)=>{
  
// })

const count=(req,res)=>{
// console.log(req,"this is nodejs data")
    // console.log(req.body.user_id,"this is nodejs data")
    // res.json("test");
    const data= req.body.user_id
    // console.log(data)
    const sql=`SELECT COUNT(*) AS row_count FROM events where User=${data};`

    connection.query(sql,function(err,result){
        // console.log(err)
        const data = result
        // console.log(data)
        res.json(data)
    })
}
// app.post("/count",(req,res)=>{
// })

module.exports = {
    getPartyDetails,
    count
};
