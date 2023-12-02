var express = require('express');
var router = express.Router();
var Book = require('../../models/book');
// Get all documents
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
// Create new document
  router.post('/', async (req, res) => {
    try {
      const newBook = new Book(req.body);
      const savedBook = await newBook.save();
      console.log('Saved Book:', savedBook);
      res.status(201).json(savedBook);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
  });
  
// Delete an existing document by Id
router.delete('/:id', async (req, res) => {
  console.log('DELETE /api/book/:id route reached');
  try {
    const deletedBook = await Book.findOneAndDelete({ id: req.params.id }).exec();

    console.log('Deleted Book:', deletedBook);

    res.sendStatus(200); // Send a simple 200 OK response for successful deletion
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;