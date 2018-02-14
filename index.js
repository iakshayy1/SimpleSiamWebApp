var path = require("path");
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
var session = require('express-session');
var User = require("./models/register.model.js");
const mongoose = require("mongoose");
const MongoStore = require('connect-mongo')(session);
// var port = process.env.PORT || 3000;
mongoose.connect("mongodb://localhost:27017/siamusers", { useMongoClient: true });
var db = mongoose.connection;

//handle mongo error
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
});

var app = express(); // make express app
var router = express.Router();
var server = require('http').createServer(app); // inject app into the server

// set up the view engine
app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/views'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: 'work hard',
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({
        mongooseConnection: db
    })
}));
app.use(function(req, res, next) {
    res.locals.user = req.session.user;
    next();
});

// manage our entries
// set up the logger
app.set('views', __dirname + '/views');
app.set("views", path.resolve(__dirname, "views")); // path to views
app.set("view engine", "ejs"); // specify our view engine

// GETS
app.get("/", function(request, response) {
    console.log('called in for default ');
    response.render('index');

});
app.get("/index", function(request, response) {
    response.render("index");
});
app.get("/menu", function(request, response) {
    response.render("menu");
});
app.get("/login", function(request, response) {
    response.render("login", {
        errormessage: ""
    });
});

app.get("/OnlineOrderingMenu", function(request, response) {
    response.render("OnlineOrderingMenu", {
        errormessage: ""
    });
});
// POSTS
app.post("/register", function(req, res, next) {
    // console.log(req.body);
    if (req.body.password !== req.body.cpassword) {
        var err = new Error('passwords does not match');
        err.status = 400;
        res.send("passwords does not match");
        return next(err);
    }

    if (req.body.email &&
        req.body.password &&
        req.body.cpassword) {
        var userData = {
            email: req.body.email,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            password: req.body.password,
            cpassword: req.body.cpassword,
        }
        User.create(userData, function(error, user) {
            if (error) {
                return next(error);
            } else {
                req.session.userId = user._id;
                console.log(req.session);
                return res.redirect('/login');
            }
        });
    } else if (req.body.logemail && req.body.logpassword) {

        User.authenticate(req.body.logemail, req.body.logpassword, function(error, user) {
            if (error || !user) {
                console.log(user)
                var err = new Error('Wrong email or password.');
                err.status = 401;
                return next(err);
            } else {
                req.session.userId = user._id;
                req.session.firstname = user.firstname;
                console.log(req.session);
                console.log("menu test");
                var val = req.session.firstname;
                console.log(val);
                return res.render('menu', { user: val })

            }
        });
    } else {
        var err = new Error('All fields required.');
        err.status = 400;
        return next(err);
    }
})



// GET route after registering
app.get('/menu', function(req, res, next) {
    User.findById(req.session.userId)
        .exec(function(error, user) {
            if (error) {
                return next(error);
            } else {
                if (user === null) {
                    var err = new Error('Not authorized! Go back!');
                    err.status = 400;
                    return next(err);
                } else {
                    // return res.send('<h1>Name: </h1>' + user.firstname + '<h2>Mail: </h2>' + user.email + '<br><a type="button" href="/logout">Logout</a>')
                    var val = req.session.user;
                    return res.render('menu', { user: val })
                    console.log(user);
                }
            }
        });
});


app.post('/logout', function(req, res, next) {
    if (req.session) {
        // delete session object
        req.session.destroy(function(err) {
            if (err) {
                console.log("error");
                return next(err);
            } else {
                console.log("logout");
                return res.redirect('/login');
            }
        });
    }
});


app.get('/contact', function(req, res) {
    console.log('I am in conact controller');
    // res.redirect('contact');
    res.render('contact', {
        message: ""
    });
});





// 404



app.post('/sendemail', function(req, res) {
    console.log('i am fetching data');
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var email = req.body.email;
    var number = req.body.number;
    var message = req.body.message;

    console.log('firstname is ', firstname);
    console.log('message is', message);


    var nodemailer = require('nodemailer'); //for sending email in contact page

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
        subject: firstname, // Subject line
        html: firstname + ' ' + lastname + ' says: ' + message, // plain text body
    };


    console.log('mail options');
    transporter.sendMail(mailOptions, function(err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    });

    res.render('contact', {
        message: "mail sent succesfully"
    });


});



server.listen(6655, function() {

    console.log('SimplySiam listening on http://127.0.0.1:6655/');


    // app.listen(port, function () {
    //   console.log('SimplySiam listening on port' + port + '!');

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
// });58