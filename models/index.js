var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/project1");

module.exports.NewsOrg = require('./newsOrg');
module.exports.Review = require("./review");
