const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    email: String,
    password: String,
    name: String,
    phone: String,
    id: String,
    avatar: String
});

var Users = mongoose.model('Users', userSchema,'users');

module.exports = Users;