var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/project1");
var NewsOrg = require('./newsOrg');

module.exports.NewsOrg = NewsOrg;
