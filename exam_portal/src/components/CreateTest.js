// src/components/CreateTest.js
import React, { useState } from 'react';
import axios from 'axios';

const CreateTest = () => {
  const [testName, setTestName] = useState('');
  const [questions, setQuestions] = useState(Array(15).fill({ questionText: '', options: [{ text: '', isCorrect: false }] }));

  const handleQuestionChange = (index, field, value) => {
    const newQuestions = [...questions];
    if (field === 'questionText') {
      newQuestions[index].questionText = value;
    } else {
      const optionIndex = field.optionIndex;
      newQuestions[index].options[optionIndex] = { ...newQuestions[index].options[optionIndex], [field.fieldName]: value };
    }
    setQuestions(newQuestions);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('/api/test', { name: testName, questions });
      alert('Test created successfully');
    } catch (error) {
      console.error('Error creating test:', error);
      alert('Failed to create test');
    }
  };

  return (
    <div className="create-test">
      <h2>Create a New Test</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Test Name:</label>
          <input
            type="text"
            value={testName}
            onChange={(e) => setTestName(e.target.value)}
            required
          />
        </div>
        {questions.map((q, index) => (
          <div key={index} className="question">
            <label>Question {index + 1}:</label>
            <input
              type="text"
              value={q.questionText}
              onChange={(e) => handleQuestionChange(index, 'questionText', e.target.value)}
              required
            />
            <div className="options">
              {q.options.map((opt, optIndex) => (
                <div key={optIndex}>
                  <label>Option {optIndex + 1}:</label>
                  <input
                    type="text"
                    value={opt.text}
                    onChange={(e) => handleQuestionChange(index, { optionIndex: optIndex, fieldName: 'text' }, e.target.value)}
                    required
                  />
                  <label>
                    <input
                      type="checkbox"
                      checked={opt.isCorrect}
                      onChange={(e) => handleQuestionChange(index, { optionIndex: optIndex, fieldName: 'isCorrect' }, e.target.checked)}
                    />
                    Correct
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
        <button type="submit">Create Test</button>
      </form>
    </div>
  );
};

export default CreateTest;
