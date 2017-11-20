var path = require("path");
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");

var app = express();  // make express app
var server = require('http').createServer(app); // inject app into the server

// set up the view engine
app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/views'));
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
// 404

// Listen for an application request on port 8081
server.listen(8080, function () {
  console.log('Guestbook app listening on http://127.0.0.1:8080/');
});

