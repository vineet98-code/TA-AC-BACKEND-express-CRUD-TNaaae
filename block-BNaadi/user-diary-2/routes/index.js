var express = require('express');

var router = express.Router();
var User = require('../model/User');

// For rendering book create form => GET on "/books/new"
router.get('/', (req, res) => {
    res.render('index.ejs');
});

module.exports = router;