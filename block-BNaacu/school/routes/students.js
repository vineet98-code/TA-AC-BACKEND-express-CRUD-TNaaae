// All the students related route which are related to specific resources
var express = require('express');

// To handle the router, express.Router module
var router = express.Router();

// create students form => GET request on "/students/new"
router.get("/new", (req,res) => {
    res.send('Book form');
    // res.render(formpage.ejs);
})

// create a students => POST request on "/students"
router.post('/', (req, res) =>{
    // grab the data and asave the data to database

});

// list students => GET request on "/students"
router.get('/', (req, res) =>{
    // list all the book
    var lists = ["ankit", "suraj", "prashant", "ravi"];
    res.render("students", {lists : lists});
    // res.render("students", { lists: ["ankit", "suraj", "prashant", "ravi"] });
});


// get single students details => GET request on "/students/:id"
router.get('/:id', (req, res) => {
    // capture the book using id from database
    // send response with book details data
    res.render("studentDetail", {
        student: { name: "rahul", email: "rahul@altcampus.io" }
    });
});

// update students form => GET request on "/students/:id/edit"
router.get('/:id/edit', (req, res) => {
    // find the students
    // render a update form with entire students data
});

// update a students => PUT request on "/students/:id"
router.put('/:id', (req, res) => {
    // findByIdAndUpdate
});

// delete a students => DELETE request on "/students/:id"
router.delete('/:id', (req, res) => {
    // delete using the id 
})

module.exports = router;