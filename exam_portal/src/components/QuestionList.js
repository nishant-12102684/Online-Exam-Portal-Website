// src/components/QuestionList.js
import React from 'react';

const QuestionList = ({ questions, currentQuestionIndex, onQuestionClick }) => {
    <li className={questionClasses} onClick={() => handleQuestionClick(question.id)}>
  {question.number}
</li>

  return (
    <div className="question-list">
      {questions.map((_, index) => (
        <div
          key={index}
          className={`question-list-item ${currentQuestionIndex === index ? 'active' : ''}`}
          onClick={() => onQuestionClick(index)}
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
};

export default QuestionList;
