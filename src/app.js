const express = require('express');
const app = express();


app.use("/user",(req,res,next) => {
    //Rout handler
    console.log("Rout Handler 1");
   // res.send("Rout handler 1");
   next()
},(req,res,next) => {
    //Rout handler
     console.log("Rout Handler 2");
    //res.send("Rout handler 2")
     next()
     },
   
(req,res,next) => {
    //Rout handler
     console.log("Rout Handler 3");
   // res.send("Rout handler 3")
    next()
   },
   
(req,res) => {
    //Rout handler
     console.log("Rout Handler 4");
    res.send("Rout handler 4")});

app.listen(7777,() => {
    console.log('Server is running on port 7777');
});
