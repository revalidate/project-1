// SERVER-SIDE JAVASCRIPT

//require express in our app
var express = require('express');
// generate a new express app and call it 'app'
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var moment = require('moment');
moment().format();

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

app.get('/newsorgs/new', function new_newsOrg (req, res) {
  res.sendFile(__dirname + '/views/newsOrg/new.html');
});

app.get('/newsorgs/:id', function one_newsOrg (req, res) {
  res.sendFile(__dirname + '/views/newsOrg/show.html');
});

app.get('/about', function about_page (req, res) {
  res.sendFile(__dirname + '/views/about.html');
});

/*
 * JSON API Endpoints
 */

app.get('/api/newsorgs', function newsOrgs_Index(req, res) {
  db.NewsOrg.find({}, function(err, newsorgs) {
    if (err) {
      console.log(err.message);
      return res.status(404).json({errors: [err.message]})
    }
    res.json(newsorgs);
    });
});

app.get('/api/newsorgs/:id', function moreInfo_Index(req, res) {
  if("new" === req.params.id){return;}
  db.NewsOrg.findOne({_id: req.params.id}, function(err, newsorgs) {
    if (err) {
      console.log(err.message);
      return res.status(404).json({errors: [err.message]})
    }
    res.json(newsorgs);
    });
});

app.post("/api/newsorgs", function newsOrg_Create(req,res){
  console.log('body', req.body);
  db.NewsOrg.create(req.body, function(err, newsOrg) {
    if (err) {
      console.log(err.message);
      return res.status(404).json({errors: [err.message]})
    }
    console.log(newsOrg);
    res.json(newsOrg);
  });
});

app.delete('/api/newsorgs/:id', function newsOrg_Delete(req, res) {
  console.log('deleting id: ', req.params.id);
  // http://mongoosejs.com/docs/api.html#model_Model.findByIdAndRemove
  db.NewsOrg.findByIdAndRemove(req.params.id, function(err) {
    if (err) {
      console.log(err.message);
      return res.status(404).json({errors: [err.message]})
    }
    console.log("removal of id=" + req.params.id  + " successful.");
    res.status(200).send(); // everything is a-OK
  });
});

app.put('/api/newsorgs/:id', function newsOrg_Update(req,res){
  console.log("oh snap, console.logs!");
  var orgId = req.params.id;
  // http://mongoosejs.com/docs/api.html#model_Model.findByIdAndUpdate
  db.NewsOrg.findByIdAndUpdate(orgId, req.body, function (err, newsorg){
    if (err) {
      console.log(err.message);
      return res.status(404).json({errors: [err.message]})
    }
    res.json(savedNewsOrg);
  });
});


app.post("/api/newsorgs/:id", function review_Create(req,res){
  console.log("getting clientside post for new review");
  var orgId = req.params.id;
  db.NewsOrg.findOne({_id: orgId}, function (err, newsorg){
    if (err) {
      console.log(err.message);
      return res.status(404).json({errors: [err.message]})
    }
    console.log(newsorg.review);
    var review = new db.Review(req.body);
    newsorg.review.push(review);
    newsorg.save(function(err, savedNewsOrg) {
      if (err) {
        console.log(err.message);
        return res.status(404).json({errors: [err.message]})
      }
      console.log('news org with new review saved:', savedNewsOrg);
      res.json(review);
    });
  });

});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
