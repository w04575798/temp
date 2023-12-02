//import our required modules
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
//establish a connection to mongodb

//establish a connection to mongodb
mongoose.connect('mongodb://localhost:27017/bookDatabase');

//define our router
var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api'); //api.js -> api

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // send a JSON response with error details
  res.status(err.status || 500).json({
    error: {
      message: err.message,
      status: err.status || 500,
      stack: req.app.get('env') === 'development' ? err.stack : undefined,
    },
  });
});

module.exports = app;
