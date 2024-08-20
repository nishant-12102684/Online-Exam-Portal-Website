// server.js
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const User = require('./models/User');
// src/server.js
const testRoutes = require('./routes/testRoutes');



const app = express();
app.use(express.json());
app.use(cors());

app.use('/api', testRoutes);

// Replace with your MongoDB connection string
const mongoURI = 'mongodb+srv://nishant5006k:nish5623@examportal.7d7ud.mongodb.net/';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  try {
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();
    res.status(201).send('User registered');
  } catch (err) {
    if (err.code === 11000) { // Duplicate key error
      res.status(400).send('Email already exists');
    } else {
      res.status(500).send('Error registering user');
    }
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign({ email: user.email }, 'secretKey', { expiresIn: '1h' });
      res.json({ token });
    } else {
      res.status(401).send('Invalid credentials');
    }
  } catch (err) {
    res.status(500).send('Error logging in');
  }
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
