/*
============================================
; Title:  config
; File Name: config.js
; Author: William Thomason
; Date:   3 May 2019
; Description: config.js file
;===========================================
*/

var config = {};
config.web = {};
config.web.port = process.env.PORT || "3000";

config.web.secret = 'topsecret';

module.exports = config;
