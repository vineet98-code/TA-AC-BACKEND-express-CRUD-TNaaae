// indedependant route which are not related to specific resources
// index.js is used for standalone route like / & /about project
var express = require('express');
// To handle the router, express.Router module
var router = express.Router();


router.get('/', (req, res) => {
    var lists = ["ankit", "suraj", "prashant", "ravi"];
    res.render("students", {lists : lists});
    // res.render("students", { lists: ["ankit", "suraj", "prashant", "ravi"] });
});


router.get('/about', (req, res) => {
    res.render('about');
});


module.exports = router;