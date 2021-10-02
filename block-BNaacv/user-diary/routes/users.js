var express = require('express');

var router = express.Router();

// list users => GET request on "/users"
router.get('/', (req, res) =>{
    // list all the user
    var lists = ["ankit", "suraj", "prashant", "ravi"];
    res.render("users", {lists : lists});
    // res.render("students", { lists: ["ankit", "suraj", "prashant", "ravi"] });
});

// Hard coded route should always be placed before placeholder route
// create students form => GET request on "/users/new"
router.get('/new', (req,res) => {
    // res.send('Book form');
    res.render('userForm');
});

// get single users details => GET request on "/users/:id"
router.get('/:id', (req, res) => {
    // capture the book using id from database
    // send response with book details data
    res.render("singleUser", {
        singleuser: { name: "rahul", email: "rahul@altcampus.io" }
    });
});


// Create a students => POST request on "/users"
router.post('/', (req, res) =>{
    // grab the data and save the data to database
    res.send(req.body);
});

// update a students => PUT request on "/users/:id"
router.put('/:id', (req, res) => {
    // findByIdAndUpdate
});

// delete a students => DELETE request on "/user/:id"
router.delete('/:id', (req, res) => {
    // delete using the id 
});

module.exports = router;