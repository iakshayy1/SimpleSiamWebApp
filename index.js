var path = require("path");
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
var register = require("./models/register.model.js");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/siamusers", { useMongoClient: true });


var app = express();  // make express app
var server = require('http').createServer(app); // inject app into the server

// set up the view engine
app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/views'));
app.use(bodyParser.urlencoded({ extended: false }));
// manage our entries
// set up the logger
app.set('views', __dirname + '/views');
app.set("views", path.resolve(__dirname, "views")); // path to views
app.set("view engine", "ejs"); // specify our view engine

// GETS
app.get("/", function (request, response) {
  console.log('called in for default ');
  response.render('index');

});
app.get("/index", function (request, response) {
  response.render("index");
});
app.get("/menu", function (request, response) {
  response.render("menu");
});
app.get("/login", function (request, response) {
  response.render("login", {
    errormessage: ""
  });
});
// POSTS
app.post("/login", function (req, res) {
  // console.log(req.body);
  let r = new register();
  r.firstname = req.body.firstname;
  r.lastname = req.body.lastname;
  r.email = req.body.email;
  r.password = req.body.password;
  r.cpassword = req.body.cpassword;
  if (req.body.password == req.body.cpassword) {
    r.save(function (err, user) {
      if (!err) {
        console.log(user);
        res.redirect("/login");
        console.log("Inserted succesfully");
      }
      else {
        // res.render("menu")
        res.send("registration failed");
        // res.send(500,'showAlert') 
      }
    })
  }
  else {
    res.send("password not matching");
  }
});


app.get('/contact', function(req, res){
  console.log('I am in conact controller');
  // res.redirect('contact');
  res.render('contact',{
    message:""
  });
});




app.post("/logincheck", function (req, res) {
  console.log('in the menu controller');
  var email = req.body.email;
  var password = req.body.password;
  console.log(email); console.log(password);
  register.find({ email: email, password: password }, function (err, userdata) {
    if (!userdata.length) {
      console.log('invalid credentials');
      res.render('login', {
        errormessage: "Invalid credentials"
      });
    } else {
      console.log('login sucessful');
      console.log(userdata);
      res.render('menu');
    }
  });


})
// 404



app.post('/sendemail', function(req,res){
console.log('i am fetching data');
  var firstname=req.body.firstname;
  var lastname=req.body.lastname;
  var email=req.body.email;
  var number=req.body.number;
  var message=req.body.message;

  console.log('firstname is ',firstname);
  console.log('message is', message);


var nodemailer = require('nodemailer');//for sending email in contact page

var transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
        user: 'rkradhkrishna@gmail.com',
        pass: 'Holyshit@1994'
    }
});

console.log('on creating nodemailer createTransport');
const mailOptions = {
  from: email, // sender address
  to: 'rkradhkrishna@gmail.com', // list of receivers
  subject:  firstname, // Subject line
  html: firstname+' '+lastname+' says: '+ message ,// plain text body
};


console.log('mail options');
transporter.sendMail(mailOptions, function (err, info) {
   if(err)
     console.log(err)
   else
     console.log(info);
});

res.render('contact',{
  message: "mail sent succesfully"
});


});



server.listen(6858, function () {
  console.log('SimplySiam listening on http://127.0.0.1:6666/');
});


// email handling code

// var nodemailer = require('nodemailer');//for sending email in contact page

// var transporter = nodemailer.createTransport({
//  service: 'gmail',
//  auth: {
//         user: 'rkradhkrishna@gmail.com',
//         pass: 'Holyshit@1994'
//     }
// });

// const mailOptions = {
//   from: 'rkradhkrishna@gmail.com', // sender address
//   to: 'rkradhkrishna@gmail.com', // list of receivers
//   subject: 'testing if it works subj line  ', // Subject line
//   html: '<p>hey this is the html content </p>'// plain text body
// };

// transporter.sendMail(mailOptions, function (err, info) {
//    if(err)
//      console.log(err)
//    else
//      console.log(info);
// });






// Listen for an application request on port 8081
// server.listen(7878, function () {
//   console.log('SimplySiam listening on http://127.0.0.1:6666/');
// });

