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

// Get one document by Id
router.get('/:id', async (req, res) => {
  console.log('GET /api/book/:id route reached');
  try {
    const book = await Book.findOne({ id: req.params.id }).exec();
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.send(book); 
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

//update endpoint
// Update an existing document by Id
router.put('/:id', async (req, res) => {
  console.log('PUT /api/book/:id route reached');
  try {
    const { id } = req.params;

    // Update the document based on the request body
    const updatedBook = await Book.findOneAndUpdate({ id }, req.body, { new: true }).exec();

    // Check if the document was found and updated
    if (!updatedBook) {
      return res.status(404).json({ message: `Document not found for ID: ${id}` });
    }

    console.log('Updated Book:', updatedBook);

    res.json(updatedBook);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;