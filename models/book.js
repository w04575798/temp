const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  id: Number,
  title: String,
  author: String,
  genre: [String],
  pages: Number,
  publishedYear: Number,
 
});

module.exports = mongoose.model('Books', bookSchema, 'bookCollection');

