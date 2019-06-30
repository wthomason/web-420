/*
============================================
; Title:  api-gateway
; File Name: app.js
; Author: William Thomason
; Date:   3 May 2019
; Description: api-gateway
;===========================================
*/

//HEADER
//const header = require("../thomason-header.js");
//console.log(header.display("William", "Thomason", "api-gateway") + "\n");

//PROGRAM START

/*
 *SETTING VARIABLES
 *require statements
 */
var express = require('express');
var path = require('path');
var createError = require('http-errors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require("mongoose");
var bodyParser = require('body-parser');
mongoose.Promise = require('bluebird');

//mongoDB connection string
var mongoDB = "mongodb+srv://admin:admin@api-gateway-tfxw4.mongodb.net/test?retryWrites=true";

var indexRouter = require('./routes/index');
var apiCatalog = require('./routes/api-catalog');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/', indexRouter);
app.use('/api', apiCatalog);


/*
 *CONECTING TO mongoDB
 */
mongoose.connect(mongoDB, {
  useMongoClient: true
});

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connected error: "));

db.once("open", function() {
  console.log("Application connected to mLab MongoDB instance");
});




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
