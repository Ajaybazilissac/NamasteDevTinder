const express = require("express");
const app = express();


app.use("/",(err,req,res,next)=>{
    if(err){
        res.status(500).send("Something went wrong");
    }
})

app.get("/getUserData",(req,res)=>{
//try{
     throw new Error("jkbgdfkgbvas")
       res.send("User data");
//}catch(err){
   // res.status(500).send("Something went wrong, we are working on it");
//}
    // Logic of DB call and get user data
   
  
})
app.use("/",(err,req,res,next)=>{
    if(err){
        res.status(500).send("Something went wrong2");
    }
})




app.listen(7777, () => {
  console.log("Server is running on port 7777");
});
