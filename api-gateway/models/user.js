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

module.exports = mongoose.model('User', userSchema);
/**
Database queries
*/
