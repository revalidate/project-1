var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Review = require("./review");

var NewsOrgSchema = new Schema({
  name: String,
  url: String,
  founder: String,
  summary: String,
  review: [ Review.schema ]
});

var NewsOrg = mongoose.model('NewsOrg', NewsOrgSchema);

module.exports = NewsOrg;