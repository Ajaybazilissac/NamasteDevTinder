 const adminAuth=(req, res, next) => {
    console.log("Admin auth is geting checked");
    
  const token = "xyz";
  const isAdminAuthorized = token === "xyz";
  if (!isAdminAuthorized) {
    res.status(401).send("Unauthorized");
  } else {
    next();
  }
}

 const userAuth=(req, res, next) => {
    console.log("Admin auth is geting checked");
    
  const token = "xyzq";
  const isAdminAuthorized = token === "xyz";
  if (!isAdminAuthorized) {
    res.status(401).send("Unauthorized");
  } else {
    next();
  }
}

module.exports={adminAuth,userAuth};