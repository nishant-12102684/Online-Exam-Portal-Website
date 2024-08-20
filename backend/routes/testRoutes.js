// src/routes/testRoutes.js
const express = require('express');
const Test = require('../models/Test');
const router = express.Router();

// Route to create a new test with questions
router.post('/test', async (req, res) => {
  const { name, questions } = req.body;

  try {
    const newTest = new Test({ name, questions });
    await newTest.save();
    res.status(201).send('Test created');
  } catch (err) {
    res.status(500).send('Error creating test');
  }
});

// Route to get a test with questions
router.get('/api/tests', async (req, res) => {
  try {
    const tests = await Test.find({}, '_id name');
    res.json(tests);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tests', error });
  }
});

// src/routes/testRoutes.js
router.get('/tests', async (req, res) => {
  try {
    const tests = await Test.find(); // Fetch all tests from the database
    res.json(tests); // Send tests as JSON response
  } catch (err) {
    console.error('Error fetching tests:', err); // Log the error
    res.status(500).send('Error fetching tests'); // Send error response
  }
});

router.get('/test-status', (req, res) => {
  res.send('Backend is working');
});

// Adjust the path as needed

// Fetch test by ID
router.get('/test/:id', async (req, res) => {
  try {
    const test = await Test.findById(req.params.id);
    if (!test) {
      return res.status(404).json({ message: 'Test not found' });
    }
    res.json(test);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;
