
const mongoose = require('mongoose');

// Define the User schema


const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    maxlength: 100,
  },
  
  lastName: {
    type: String,
    required: true,
    maxlength: 100,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true, 
    lowercase: true,
    validate: {
      validator: function (value) {
        // Basic email validation 
        return /\S+@\S+\.\S+/.test(value);
      },
      message: 'Invalid email address',
    },
  },
  password: {
    type: String,
    required: true,
    maxlength: 255,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;