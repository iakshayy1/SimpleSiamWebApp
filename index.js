var path = require("path");
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
var register = require("./models/register.model.js");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/siamusers", {useMongoClient:true});


var app = express();  // make express app
var server = require('http').createServer(app); // inject app into the server

// set up the view engine
app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/views'));
app.use(bodyParser.urlencoded({extended:false})); 
// manage our entries
// set up the logger
app.set("views", path.resolve(__dirname, "views")); // path to views
app.set("view engine", "ejs"); // specify our view engine

// GETS
app.get("/", function (request, response) {
  response.render("index")
});
app.get("/index", function (request, response) {
    response.render("index");
});
app.get("/menu", function (request, response) {
    response.render("menu");  
});
app.get("/login", function (request, response) {
  response.render("login");  
});
// POSTS
app.post("/login", function(req,res){

  // console.log(req.body);
  let r = new register();
  r.firstname=req.body.firstname;
  r.lastname=req.body.lastname;
  r.email=req.body.email;
  r.password=req.body.password;
  r.cpassword=req.body.cpassword;
  if(req.body.password===req.body.cpassword){
  r.save(function(err,user){
    if(!err){
      console.log(user);
      res.redirect("/login.html");
      console.log("Inserted succesfully");
    }
    else{
      // res.render("menu")
      res.send("registration failed");
      // res.send(500,'showAlert') 
    }
  })
}
else{
  res.send("password not matching");
}
});

app.post("/menu", function(req,res){


})
// 404

// Listen for an application request on port 8081
<<<<<<< HEAD
app.listen(80, function () {
  console.log('Guestbook app listening on http://127.0.0.1:80/');
=======
server.listen(8080, function () {
  console.log('SimplySiam listening on http://127.0.0.1:8080/');
>>>>>>> 451e63cf782c9f1e047cfe1bcdd01e624ba13c38
});

