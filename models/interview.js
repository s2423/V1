var mongoose = require("mongoose");

var interviewSchema = new mongoose.Schema({
    Company: String,
    Branch: String,
    Profile: String,
    Package: String,
    Location: String,
    CGPA: String
});


module.exports = mongoose.model("Interview", interviewSchema);
