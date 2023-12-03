const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
    maxlength: 100,
  },
  author: {
    type: String,
    required: true,
    maxlength: 100,
  },
  genre: {
    type: String,
  },
  pages: {
    type: Number,
  },
  publishedYear: {
    type: Number,
    required: true,
    validate: {
      validator: function (value) {
        return value >= 1000 && value <= new Date().getFullYear();
      },
      message: props => `${props.value} is not a valid published year!`,
    },
  },
}, { collection: 'bookCollection' });

module.exports = mongoose.model('Books', bookSchema);