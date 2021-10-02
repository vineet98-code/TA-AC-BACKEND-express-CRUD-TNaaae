var express = require('express');
var path = require('path');

// router file
var usersRouter = require('./routes/users');


// connect to database
// mongoose.connect(
//     "mongodb://localhost/sample", 
//     { useNewUrlparser: true, useUnifiedTopology: true },
//      (err) => {
//          console.log(err ? err : "Connected to database");
//      }
// )

// instantiate the app
var app = express();

// middleware
app.use(express.json());

// benefits of using res.locals is that we can add certain specific message before we going to handled the route
// middleware added meesage to response.locals.
// res.locals ia an object used to pass additinal data to the template which is being rendered for that specific request.
app.use((req, res, next) => {
    res.locals.message = 'hello world';
    next();
})

// middleware setup for view engine ejs for render dynamic webpage
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// It looks for any form and simply put into the body
app.use(express.urlencoded({ extended: false}));


// routing middleware with '/users' pattern in users.js
app.use('/users', usersRouter);


// error handled middleware
app.use((req, res, next) => {
  res.status(404).send('Page not Found');
});  


app.listen(2000, () => {
    console.log(`server listening on port 2k`);
}) 