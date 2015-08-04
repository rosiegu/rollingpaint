var router = require('express').Router();
var mongoose = require('mongoose');
var passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;

// Connection URL
//mongoose.connect('mongodb://localhost:27017/rollingpaint');
// var url = 'mongodb://localhost:27017/rollingpaint';

/* GET users listing. */
router.get('/', function(req, res, next) {

  User.find({}, function(err, docs) {
    console.log("Found the following records");
    console.dir(docs);
    res.send(docs);
  });
});

router.get('/:name', function(req, res, next) {
  // Use connect method to connect to the Server
  MongoClient.connect(url, function(err, db) {
    console.log("Connected correctly to server");

    // Find some documents
    db.collection('user').findOne({name: req.params.name}, function(err, doc) {
      console.log("Found the following records");
      console.dir(doc);
      res.send(doc);

      db.close();
    });

  });
});

router.post('/:name', function(req, res, next) {
  // Use connect method to connect to the Server
  MongoClient.connect(url, function(err, db) {
    console.log("Connected correctly to server");

    // Insert some documents
    db.collection('user').insert([
      {name : req.params.name}
    ], function(err, result) {

    });

    db.close();
  });

  res.send('Save ' + req.params.name);
});

router.delete('/:name', function(req, res, next) {
  // Use connect method to connect to the Server
  MongoClient.connect(url, function(err, db) {
    console.log("Connected correctly to server");

    // Insert some documents
    db.collection('user').remove({name: req.params.name}, function(err, result) {
      console.log("deleted " + req.params.name);
      db.close();
    });
  });

  res.send('Save ' + req.params.name);
});

router.post('/login', function(req, res, next) {
  // Use connect method to connect to the Server
  MongoClient.connect(url, function(err, db) {
    console.log("Connected correctly to server");

    // Insert some documents
    db.collection('user').insert([
      {name : req.params.name}
    ], function(err, result) {

    });

    db.close();
  });

  res.send('Save ' + req.params.name);
});

module.exports = router;
