// api/users.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../models/users');

// Registration endpoint
router.post('/register', async (req, res) => {
  try {
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
  
});

module.exports = router;
