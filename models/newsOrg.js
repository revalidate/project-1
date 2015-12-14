var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var NewsOrgSchema = new Schema({
  name: String,
  url: String,
  founder: String,
  summary: String
});

var NewsOrg = mongoose.model('NewsOrg', NewsOrgSchema);

module.exports = NewsOrg;
