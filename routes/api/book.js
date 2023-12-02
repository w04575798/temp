var express = require('express');
var router = express.Router();
var Book = require('../../models/book');

router.get('/', async (req, res) => {
    console.log('GET /api/book route reached');
    try {
      const books = await Book.find().exec();
      console.log('Books:', books); // Add this line
      res.send(books);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
  });

module.exports = router;