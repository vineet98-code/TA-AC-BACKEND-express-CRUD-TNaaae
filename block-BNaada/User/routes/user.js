var express = require('express');

var router = express.Router();
var User = require('../model/User');

// For rendering book create form => GET on "/books/new"
router.get('/new', (req, res, ) => {
    res.render('userForm');
});

router.get('/', (req, res, next) => {
    User.find({}, (err, user) => {
     if(err) return next(err)
      res.render('user', { user : user})
    })
});

// Singlr user
router.get('/:id', (req, res, next) => {
      
      var id = req.params.id;
      User.findById(id, (err, user) => {
        if(err) return next(err);
        res.render('singleUser', {user: user})
    })
    
});

router.post('/', (req, res, next) => {
    // capture data save to database and lastly send response back to client that your book has been submitted
    // console.log(req.body);
    // Book.create save the entire information which is capture 
    User.create(req.body, (err, createdUser) => {
        // console.log(err, createdUser)
        // whatever err thrown by mongoose, That err will be passed to this error handler middleware
        if (err) return res.redirect('/user/new');
        // redirect is used to redirect the specfic routes after specific operation is perform, we can use redirect method and always does the get request
        res.redirect('/');
        
    })
});

module.exports = router;