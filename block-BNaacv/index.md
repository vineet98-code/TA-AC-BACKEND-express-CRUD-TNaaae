writeCode

Q. create an express app named `user-diary` from scratch

- use ejs as template engine
- navigate to application

- create users router to handle routes for below tasks.
- handle the following routes inside users router:
  - list users
  - get single user details
  - new user form
  - delete user
  - update user

Handle above routes by rendering an appropriate template on webpages for them.

- GET '/users' => render `users.ejs` template with list of users
- GET '/users/:id' => render `singleUser.ejs` template with single user object
- GET '/users/new' => render `userForm.ejs` template

Add some basic `HTML` content through these templates which should be rendered on the webpage.



<!-- var express = require('express');
var path = require('path');
// const { send } = require('process');

// router file
// var indexRouter = require('./routes/index');
var booksRouter = require('./routes/books');
var studentsRouter = require('./routes/students');


// var Products = require('./models/products')

// var User = require('./models/user')

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

// app.use('/', (req, res) => {
//     res.render('index.ejs');
// })

// routing middleware with '/' pattern in index.js
// app.use('/', indexRouter);

// routing middleware with '/books' pattern in books.js
app.use('/books', booksRouter);

// routing middleware with '/students' pattern in students.js
app.use('/students', studentsRouter);


 // error handled middleware
app.use((req, res, next) => {
  res.status(404).send('Page not Found');
});  


app.listen(2000, () => {
    console.log(`server listening on port 2k`);
}) -->