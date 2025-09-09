const express = require("express");
const app = express();

const {adminAuth,userAuth}=require("./middlewares/auth");
app.use("/admin",adminAuth );

app.get("/user",userAuth,(req,res)=>{
    res.send("User data");
})
app.get("/admin/getAllData", (req, res) => {
  res.send("All the data");
});
app.get("/admin/deleteUser", (req, res) => {
  res.send("Delete a user");
});

app.listen(7777, () => {
  console.log("Server is running on port 7777");
});
