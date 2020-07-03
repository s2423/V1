var express = require("express");
var router  = express.Router();
var Interview = require("../models/interview");
var middleware = require("../middleware");

router.get("/", function(req, res){
    res.render("interview/show");
});

router.post("/", function(req, res, next){
     new Interview({
     Company : req.body.Intro1,
     Branch : req.body.Intro2,
     Profile : req.body.Intro3,
     Package : req.body.Intro4,
     Location : req.body.Intro5,
     CGPA : req.body.Intro6
}).save(function(err, doc){
        if(err) throw err;
        else {
            res.render('interview/show', {title: 'Interview Record' , records : doc , success: ' Record inserted successfully'});
        }
    });
});


module.exports = router;