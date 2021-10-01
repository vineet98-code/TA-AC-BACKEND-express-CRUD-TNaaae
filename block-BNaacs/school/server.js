var express = require('express');
var path = require('path');

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

// middleware set for ejs for render dynamic webpage
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));


// route
app.get('/', (req, res) => {
    res.render('index');
});

// error handled middleware
app.use((req, res) => {
  res.send('Page not Found');
});  


app.listen(3000, () => {
    console.log(`server listening on port 3k`);
})