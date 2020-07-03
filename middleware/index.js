var Interview             = require("../models/interview");
var User                  = require("../models/user");

module.exports = {
	isLoggedIn: function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
} 

}

