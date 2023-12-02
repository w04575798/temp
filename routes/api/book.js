var express = require('express');
var router = express.Router();
var Book = require('../../models/book');

router.get('/', (req, res) => {

  console.log(Book.find().exec()
                .then(book => { 
                    res.send(book)
                })
                .catch(err => console.log(err)));
            
});

router.get('/:id', (req, res)=> { 
    res.send(`GET ONE BOOK WITH ID ${req.params.id}`)
})

router.post('/:id', (req, res)=> { 
    res.send(`CREATE NEW BOOK `)
})

router.put('/:id', (req, res)=> { 
    res.send(`UPDATE BOOK WITH ID ${req.params.id}`)
})

router.delete('/:id', (req, res)=> { 
    res.send(`DELETE BOOK WITH ID ${req.params.id}`)
})

module.exports = router;