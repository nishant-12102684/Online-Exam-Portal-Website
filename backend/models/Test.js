// src/models/Test.js
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  questionText: { type: String, required: true },
  options: [{ text: String, isCorrect: Boolean }],
});

const testSchema = new mongoose.Schema({
  name: { type: String, required: true },
  questions: [questionSchema],
});

const Test = mongoose.model('Test', testSchema);

module.exports = Test;
