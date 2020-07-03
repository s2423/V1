var express = require("express");
var router  = express.Router();
var passport = require("passport");
var Interview = require("../models/interview");
var User = require("../models/user");
var middleware = require("../middleware");



router.get("/", function(req, res){
    res.render("home");
});

router.get("/Landing", function(req, res){
   res.render("Landing"); 
});

// Auth Routes

//show sign up form
router.get("/register", function(req, res){
   res.render("register"); 
});
//handling user sign up
router.post("/register", function(req, res){
  var newUser = new User({
    username: req.body.username,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email
  });
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render('register');
        }
        passport.authenticate("local")(req, res, function(){
           res.redirect("/Landing");
        });
    });
});

// LOGIN ROUTES
//render login form
router.get("/login", function(req, res){
   res.render("login"); 
});
//login logic
//middleware
router.post("/login", passport.authenticate("local", {
    successRedirect: "/Landing",
    failureRedirect: "/login"
}) ,function(req, res){
});

router.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
});

module.exports = router;