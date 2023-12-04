// api/users.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../models/users');
const jwtMiddleware = require('../../middleware/jwtMiddleware');
const cookie = require('cookie')

// Registration endpoint
router.post('/register', async (req, res) => {
  try {
    // Check if the user with the given email already exists
    const existingUser = await User.findOne({ email: req.body.email });

    if (existingUser) {
      return res.status(400).json({ error: 'User with this email already exists' });
    }

    // Validate and hash the password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Create a new user using the User model
    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashedPassword,
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    // Return the email and _id of the created user
    res.status(201).json({
      email: savedUser.email,
      _id: savedUser._id,
    });
  } catch (error) {
    // Handle errors
    res.status(400).json({ error: error.message });
  }
});

// Login endpoint
router.post('/login', async (req, res) => {
  try {
    // Find the user by email
    const user = await User.findOne({ email: req.body.email });

    // If the user is not found or password is incorrect, send an error response
    if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate a JWT token using the secret key from the environment variable
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    console.log('Token:', token);

    // Set the token in the response header
    res.header('x-auth-token', token);

    // Send a success response
    res.status(200).json({ message: 'Login successful'});
  } catch (error) {
    // Handle errors
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
