const express = require('express');
const app = express();


app.get("/user/:userId/:name/:password",(req,res)=>{
    console.log(req.params)
    res.send({firstName:"Ajay", lastName:"Issac"})
})



app.listen(7777,() => {
    console.log('Server is running on port 7777');
});
