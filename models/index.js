var mongoose = require("mongoose");
mongoose.connect( process.env.MONGOLAB_URI ||
                  process.env.MONGOHQ_URL || 
				  "mongodb://localhost/project1");

module.exports.NewsOrg = require('./newsOrg');
module.exports.Review = require("./review");
