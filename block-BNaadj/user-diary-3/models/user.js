var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name : {type: String, required: true },
    email :{type: String, required: true },
    age : Number,
    address: String,
    bio: String,
    hobbies: String

}, {timestamps: true });

// This Book is used to perform the crud operation and capture it in router book.js
var User = mongoose.model('User', userSchema); // model is equivalent to colletions

module.exports = User;