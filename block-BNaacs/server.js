var express = require('express');
var mongoose = require('mongoose');

// var Products = require('./models/products')

var User = require('./models/user')

// connect to database
mongoose.connect(
    "mongodb://localhost/sample", 
    { useNewUrlparser: true, useUnifiedTopology: true },
     (err) => {
         console.log(err ? err : "Connected to database");
     }
)

// instantiate the app
var app = express();

// middleware
app.use(express.json());


// route
app.get('/', (req, res) => {
    res.send('Welcome');
});



    
// error handled middleware
app.use((req, res) => {
  res.send('Page not Found');
});  


app.listen(4000, () => {
    console.log(`server listening on port 4k`);
})