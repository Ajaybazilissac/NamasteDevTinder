const express = require('express');
const app = express();


app.get("/user",(req,res)=>{
    res.send({firstName:"Ajay", lastName:"Issac"})
})

app.use("/test",(req,res)=>{
    res.send('Hello, from the server!');
})

app.post("/user",(req,res)=>{
    console.log("Save Data to the database");
    res.send("Data succesfully saved to the database");
})

app.listen(7777,() => {
    console.log('Server is running on port 7777');
});
