// src/components/Question.js
import React from 'react';
import './Question.css';

const Question = ({ question, options, selectedOption, onOptionChange }) => {
  return (
    <div className="question-container">
      <h3 className="question-text">{question}</h3>
      <ul className="option-container">
        {options.map((option, index) => (
          <li
            key={index}
            className={`option ${
              selectedOption === option ? 'selected' : ''
            }`}
          >
            <input
              type="radio"
              id={`option-${index}`}
              name="option"
              value={option}
              checked={selectedOption === option}
              onChange={onOptionChange}
              className="option-radio"
            />
            <label htmlFor={`option-${index}`} className="option-label">
              {option}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
