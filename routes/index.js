var express = require('express');
var exphbs  = require('express-handlebars');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

});




module.exports = router;
