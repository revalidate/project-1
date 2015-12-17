var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ReviewSchema = new Schema({
	date: { type: Date, default: Date.now },
	score: Number,
	comment: String
});

var Review = mongoose.model('Review', ReviewSchema);

module.exports = Review;