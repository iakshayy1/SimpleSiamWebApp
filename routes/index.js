var express = require('express');
var router = express.Router();
var Cart = require('../models/cart');
var mailer = require('node-mailer');
var Product = require('../models/product');
var Salad = require('../models/salad');

var Order = require('../models/order');

router.get('/home', function(req, res, next) {
    res.render('shop/home', { title: 'Simple Siam' });
});

router.get('/menu', function(req, res, next) {
    res.render('shop/menu', { title: 'Simple Siam' });
});

router.get('/about', function(req, res, next) {
    res.render('shop/about', { title: 'Simple Siam' });
});

/* GET home page. */
router.get('/index', function(req, res, next) {
    var successMsg = req.flash('success')[0];
    Product.find(function(err, docs) {
        var productChunks = [];
        var chunkSize = 3;
        for (var i = 0; i < docs.length; i += chunkSize) {
            productChunks.push(docs.slice(i, i + chunkSize));
        }
        res.render('shop/index', { title: 'Simply Siam', products: productChunks, successMsg: successMsg, noMessages: !successMsg });
    });


});

// router.get('/menu', function(req, res, next) {
//     res.redirect('shop/menu', { title: 'Simple Siam' });
// });

router.get('/add-to-cart/:id', function(req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    Product.findById(productId, function(err, product) {
        if (err) {
            return res.redirect('/index');
        }
        cart.add(product, product.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect('/index');
    });
});

router.get('/add/:id', function(req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    Product.findById(productId, function(err, product) {
        if (err) {
            return res.redirect('/');
        }
        cart.add(product, product.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect('/shopping-cart');
    });
});

router.get('/reduce/:id', function(req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    cart.reduceByOne(productId);
    req.session.cart = cart;
    res.redirect('/shopping-cart');
});

router.get('/remove/:id', function(req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    cart.removeItem(productId);
    req.session.cart = cart;
    res.redirect('/shopping-cart');
});

router.get('/shopping-cart', function(req, res, next) {
    if (!req.session.cart) {
        return res.render('shop/shopping-cart', { products: null });
    }
    var cart = new Cart(req.session.cart);
    res.render('shop/shopping-cart', { products: cart.generateArray(), totalPrice: cart.totalPrice });
});

router.get('/review', function(req, res, next) {
    if (!req.session.cart) {
        return res.render('shop/review', { products: null });
    }
    var cart = new Cart(req.session.cart);
    res.render('shop/review', { products: cart.generateArray(), totalPrice: cart.totalPrice });
});

router.get('/checkout', isLoggedIn, function(req, res, next) {
    if (!req.session.cart) {
        return res.redirect('/shopping-cart');
    }
    var cart = new Cart(req.session.cart);
    var errMsg = req.flash('error')[0];
    res.render('shop/checkout', { total: cart.totalPrice, errMsg: errMsg, noError: !errMsg });
});

router.get('/guest-checkout', function(req, res, next) {
    if (!req.session.cart) {
        return res.redirect('/shopping-cart');
    }
    var cart = new Cart(req.session.cart);
    var errMsg = req.flash('error')[0];
    res.render('shop/guest-checkout', { total: cart.totalPrice, errMsg: errMsg, noError: !errMsg });
});

router.post('/checkout', isLoggedIn, function(req, res, next) {
    if (!req.session.cart) {
        return res.redirect('/shopping-cart');
    }
    var cart = new Cart(req.session.cart);

    var stripe = require("stripe")(
        "sk_test_vuhrQyLTUCaR5AhzudvR1Ejp"
    );

    stripe.charges.create({
        amount: cart.totalPrice * 100,
        currency: "usd",
        source: req.body.stripeToken, // obtained with Stripe.js
        description: "Test Charge"
    }, function(err, charge) {
        if (err) {
            req.flash('error', err.message);
            return res.redirect('/checkout');
        }
        var order = new Order({
            user: req.user,
            cart: cart,
            address: req.body.address,
            name: req.body.name,
            paymentId: charge.id
        });
        order.save(function(err, result) {
            req.flash('success', 'Ordered Successfully!');
            req.session.cart = null;
            res.redirect('/');
        });
    });
});

router.post('/guest-checkout', function(req, res, next) {
    if (!req.session.cart) {
        return res.redirect('/shopping-cart');
    }
    var cart = new Cart(req.session.cart);

    var stripe = require("stripe")(
        "sk_test_vuhrQyLTUCaR5AhzudvR1Ejp"
    );

    stripe.charges.create({
        amount: cart.totalPrice * 100,
        currency: "usd",
        source: req.body.stripeToken, // obtained with Stripe.js
        description: "Test Charge"
    }, function(err, charge) {
        if (err) {
            req.flash('error', err.message);
            return res.redirect('/checkout');
        }
        var order = new Order({
            user: req.user,
            cart: cart,
            address: req.body.address,
            name: req.body.name,
            paymentId: charge.id
        });
        order.save(function(err, result) {
            req.flash('success', 'Ordered Successfully!');
            req.session.cart = null;
            res.redirect('/index');
        });
    });


// *********************************** sending order email ********************************8888



// var MongoClient = require('mongodb').MongoClient;
// var ObjectId = require('mongodb').ObjectID;
// var url = "mongodb://localhost:27017/OnlineOrder";

// var data;

// var findorder = function (db, callback) {
//     var cursor = db.collection('OnlineOrder').findOne( {$query:{}, $orderby:{$natural:-1}} )

//     cursor.each(function (err, doc) {

//         if (doc != null) {
//             console.dir(doc);

//         } else {
//             callback();
//         }
//     });
// };

// MongoClient.connect(url, function (err, db) {

//     findRestaurants(db, function () {
//         db.close();
//     });
// });











});

// ****************** contact page email code *********************

router.post('/sendemail', function(req, res) {
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

    res.render('shop/about', {
        message: "mail sent succesfully"
    });


});

module.exports = router;

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    req.session.oldUrl = req.url;
    res.redirect('/user/signin');
}