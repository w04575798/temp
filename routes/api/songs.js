var express = require('express');
var router = express.Router();

router.get('/', (req, res)=> { 
    res.send('GET ALL SONGS!! ')
})

router.get('/:id',(req, res)=> {
    res.send(`GET ONE SONG WITH ID ${req.params.id}`)
})

module.exports = router;

