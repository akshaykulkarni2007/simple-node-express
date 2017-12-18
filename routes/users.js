var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.render('users');
  var db = req.db;
  var collection = db.get('users');
  collection.find({},{},function(e,docs) {
    res.render('users', {
      "users" : docs,
      "title": "Users",
      "addTitle": "Add User"
    });
  });
});

module.exports = router;
