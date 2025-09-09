const express = require('express');
const app = express();


app.use("/user",[(req,res,next)=>{
    //Rout Handlers 1
    console.log("Rout handler 1");
    
    //res.send("Rout handler responds 1")
     next();
   
},(req,res,next)=>{
    //Rout Handlers 2
    console.log("Rout handler 2");
    //res.send("Rout handler responds 2")
    next()
},(req,res,next)=>{
    //Rout Handlers 3
    console.log("Rout handler 3");
   // res.send("Rout handler responds 3")
    next();
},(req,res,next)=>{
    //Rout Handlers 4
    console.log("Rout handler 4");
    //res.send("Rout handler responds 4")
    next();
},(req,res)=>{
    // Route Handlers 5
    console.log("Rout handler 5");
    res.send("Rout handler responds 5")
    
}])

app.listen(7777,() => {
    console.log('Server is running on port 7777');
});
