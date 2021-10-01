// All the book related route
// All route which are related to specific resources
var express = require('express');
// To handle the router, express.Router module
var router = express.Router();

// create book form => GET request on "/books/new"
router.get("/new", (req,res) => {
    res.send('Book form');
    // res.render(formpage.ejs);
})

// create a book => POST request on "/books"
router.post('/', (req, res) =>{
    // grab the data and asave the data to database

});

// list books => GET request on "/books"
router.get('/', (req, res) =>{
    // list all the book
});

// get single book details => GET request on "/books/:id"
router.get('/:id', (req, res) => {
    // capture the book using id from database
    // send response with book details data
});

// update book form => GET request on "/books/:id/edit"
router.get('/:id/edit', (req, res) => {
    // find the book
    // render a update form with entire book data
});

// update a book => PUT request on "/books/:id"
router.put('/:id', (req, res) => {
    // findByIdAndUpdate
});

// delete a book => DELETE request on "/books/:id"
router.delete('/:id', (req, res) => {
    // delete using the id 
})

module.exports = router;