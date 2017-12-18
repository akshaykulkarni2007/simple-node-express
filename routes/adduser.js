var express = require('express');
var router = express.Router();

/* POST to Add User Service */
router.post('/', function(req, res) {
  // Set our internal DB variable
  var db = req.db;

  // Get our form values. These rely on the "name" attributes
  var userName = req.body.name;
  var userEmail = req.body.email;

  // Set our collection
  var collection = db.get('users');

  // Submit to the DB
  collection.insert({
    "name" : userName,
    "email" : userEmail
  },
  function (err, doc) {
    if (err) {
      // If it failed, return error
      res.send("There was a problem adding the information to the database.");
    }
    else {
      // And forward to success page
      res.redirect("users");
    }
  });
});

module.exports = router;
