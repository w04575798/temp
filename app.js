// Import necessary modules
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
require('dotenv').config();
var cors = require('cors');


// establish connection to MongoDB
mongoose.connect(process.env.DATABASE_URL);

// Import routers
var indexRouter = require('./routes/index');
const testRouter = require('./routes/api/test');
const bookRouter = require('./routes/api/book');
const usersRouter = require('./routes/api/users');

// define the app
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// defining
app.use(cors({ exposedHeaders: 'x-auth-token',}));//allow requests from any origin
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/build')));

// routes
app.use('/', indexRouter);
app.use('/api/test', testRouter);
app.use('/api/book', bookRouter);
app.use('/api/users', usersRouter);


// 404 error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500).json({
    error: {
      message: err.message,
      status: err.status || 500,
      stack: req.app.get('env') === 'development' ? err.stack : undefined,
    },
  });
});

module.exports = app;
