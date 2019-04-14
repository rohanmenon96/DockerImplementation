const express = require('express')
const app = express();
app.listen(3005,()=>{
    console.log("App is Currently Listening at port 3005!")
})

app.get("/",async(req,res)=>{
    res.send("Hello Hem!")
})
