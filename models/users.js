const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
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
    // validate: {
    //   validator: function (value) {
    //     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    //   },
    //   message: props => `${props.value} is not a valid email address!`,
    // },
  },
  password: {
    type: String,
    required: true,
    maxlength: 255,
  },
});

// Export the user model
const User = mongoose.model('User', userSchema);
module.exports = User;