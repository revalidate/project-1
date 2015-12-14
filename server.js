// SERVER-SIDE JAVASCRIPT

//require express in our app
var express = require('express');
// generate a new express app and call it 'app'
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// serve static files from public folder
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

/************
 * DATABASE *
 ************/

var db = require('./models');

/**********
 * ROUTES *
 **********/

/*
 * HTML Endpoints
 */

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/newsOrg/index.html');
});

app.get('/neworg', function homepage (req, res) {
  res.sendFile(__dirname + '/views/newsOrg/new.html');
});

app.get('/shownews', function homepage (req, res) {
  res.sendFile(__dirname + '/views/newsOrg/show.html');
});

app.get('/newreview', function homepage (req, res) {
  res.sendFile(__dirname + '/views/newsOrg/reviews/new.html');
});

/*
 * JSON API Endpoints
 */

app.get('/api/', function newsOrgs_Index(req, res) {
  db.NewsOrg.find({}, function(err, newsorgs) {
    if (err) {console.log(err);}
    res.json(newsorgs);
  });
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
