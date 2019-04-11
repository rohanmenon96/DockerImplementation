const express = require('express')
const app = express();
app.listen(3000,()=>{
    console.log("App is Currently Listening at port 3000!")
})

app.get("/",async(req,res)=>{
    res.send("Hello World!")
})