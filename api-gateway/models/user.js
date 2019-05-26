/*
============================================
; Title:  api-gateway
; File Name: user.js
; Author: William Thomason
; Date:   12 May 2019
;===========================================
*/

/**
Fields username, password, and email
*/
var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
 username: String,
 password: String,
 email: String
});

var User = module.exports = mongoose.model('User', userSchema);

/**
Database queries
*/

//user.save is used to add a new user in our database
module.exports.add = (user, callback) => {
  user.save(callback);
};

module.exports.getById = (id, callback) => {
  var query = {_id: id};
  User.findById(query, callback);
};


