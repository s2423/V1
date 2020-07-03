var express               = require("express"),
    app                   = express();
    mongoose              = require("mongoose"),
    passport              = require("passport"),
    bodyParser            = require("body-parser"),
    User                  = require("./models/user"),
    LocalStrategy         = require("passport-local"),
    methodOverride = require("method-override"),
    passportLocalMongoose = require("passport-local-mongoose"),
    Interview             = require("./models/interview")


var indexRoutes = require("./routes/index");
var interviewRoutes = require("./routes/interview");



mongoose.connect("mongodb://localhost:27017/Uip-v1", {useNewUrlParser: true ,  useUnifiedTopology: true });
var app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));

app.use(require("express-session")({
    secret: "UIP Program",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use("/", indexRoutes);
app.use("/interview", interviewRoutes);



var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Server Has Started!");
});