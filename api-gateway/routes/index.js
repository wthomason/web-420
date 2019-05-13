/*
============================================
; Title:  api-gateway
; File Name: index.js
; Author: William Thomason
; Date:   8 May 2019
;===========================================
*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
