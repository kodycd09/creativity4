var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log('Here');
  res.sendFile('index.html', { root: 'public' });
});

router.get('/getcountry', function(req, res, next) {
    var fs = require('fs');
    console.log('search param ' + req.query.q);
    var searchParam = req.query.q.toLowerCase();
    fs.readFile('./countries.dat.txt', { encoding: 'utf8' }, function (err, data) {
        var countries = data.split('\n');
        var result = countries.filter(function(country) {
            return country.toLowerCase() == (searchParam);
        });
        res.status(200).json(result);
    });
});

module.exports = router;
