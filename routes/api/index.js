var express = require('express');
var router = express.Router();

var usersRouter = require('./users');

router.use('/users', usersRouter);

router.get('/', (req, res) =>  { 
    res.send('Welcome to the API')
} )


module.exports= router