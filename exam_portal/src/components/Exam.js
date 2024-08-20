import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Question from './Question';
import CameraPreview from './CameraPreview';
import { useParams, useNavigate } from 'react-router-dom';

const Exam = () => {
  const { testId } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [score, setScore] = useState(null);
  const [flaggedQuestions, setFlaggedQuestions] = useState(new Set());
  const [attemptedQuestions, setAttemptedQuestions] = useState(new Set());
  const [cameraVisible, setCameraVisible] = useState(false);
  const [testSubmitted, setTestSubmitted] = useState(false); // Track test submission
  const videoRef = useRef(null); // Reference for video element

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(`https://online-exam-portal-website.onrender.com/api/test/${testId}`);
        setQuestions(response.data.questions);
        setCameraVisible(true); // Show camera when test starts
      } catch (error) {
        console.error('Error fetching test questions:', error);
      }
    };

    fetchQuestions();

    return () => {
      // Ensure camera stream is stopped only when test is submitted
      if (testSubmitted && videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, [testId, testSubmitted]);

  const handleOptionChange = (e) => {
    setSelectedOptions({
      ...selectedOptions,
      [currentQuestionIndex]: e.target.value,
    });
    setAttemptedQuestions(new Set([...attemptedQuestions, currentQuestionIndex]));
  };

  const handleFlag = () => {
    const newFlaggedQuestions = new Set(flaggedQuestions);
    if (flaggedQuestions.has(currentQuestionIndex)) {
      newFlaggedQuestions.delete(currentQuestionIndex);
    } else {
      newFlaggedQuestions.add(currentQuestionIndex);
    }
    setFlaggedQuestions(newFlaggedQuestions);
  };

  const handleSubmit = () => {
    let newScore = 0;
    questions.forEach((q, index) => {
      const selectedOption = selectedOptions[index];
      const correctOption = q.options.find(option => option.isCorrect);
      if (selectedOption === correctOption.text) {
        newScore++;
      }
    });
    setScore(newScore);
    setTestSubmitted(true); // Mark test as submitted
    setCameraVisible(false); // Stop the camera when test is submitted
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleQuestionClick = (index) => {
    setCurrentQuestionIndex(index);
  };

  const handleBackToSelection = () => {
    navigate('/test-selection'); // Navigate to test selection page
    setTimeout(() => {
      window.location.reload(); // Refresh the page after navigation
    }, 100); // Adjust timeout as needed
  };

  if (questions.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className="exam-container">
      <div className="exam-layout">
        <div className="question-list-container">
          <div className="question-list">
            {questions.map((_, index) => {
              const isAttempted = attemptedQuestions.has(index);
              const isFlagged = flaggedQuestions.has(index);

              let classNames = 'question-list-item';
              if (currentQuestionIndex === index) classNames += ' active';
              if (isAttempted) classNames += ' attempted';
              if (isFlagged) classNames += ' flagged';
              if (isAttempted && isFlagged) classNames += ' attempted flagged';

              return (
                <div
                  key={index}
                  className={classNames}
                  onClick={() => handleQuestionClick(index)}
                >
                  {index + 1}
                </div>
              );
            })}
          </div>
          <CameraPreview
            isVisible={cameraVisible}
            videoRef={videoRef} // Pass videoRef to CameraPreview
          />
        </div>
        <div className="exam-content">
          {score === null ? (
            <div>
              <Question
                question={questions[currentQuestionIndex].questionText}
                options={questions[currentQuestionIndex].options.map(option => option.text)}
                selectedOption={selectedOptions[currentQuestionIndex]}
                onOptionChange={handleOptionChange}
              />
              <div className="navigation-buttons">
                <button onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
                  Previous
                </button>
                <button onClick={currentQuestionIndex === questions.length - 1 ? handleSubmit : handleNext}>
                  {currentQuestionIndex === questions.length - 1 ? "Submit" : "Next"}
                </button>
              </div>
              <button className="submit-button" onClick={handleSubmit}>
                Submit
              </button>
              <button className="flag-button" onClick={handleFlag}>
                {flaggedQuestions.has(currentQuestionIndex) ? "Unflag" : "Flag"}
              </button>
            </div>
          ) : (
            <div class='scorecard-container'>
              <h2>Your Score: {score}/{questions.length}</h2>
              <button onClick={handleBackToSelection}>Back to Test Selection</button>
            </div>
          )}
          <div className="status-panel">
            <h3>Question Status</h3>
            <p>Attempted: {attemptedQuestions.size}</p>
            <p>Unattempted: {questions.length - attemptedQuestions.size}</p>
            <p>Flagged: {flaggedQuestions.size}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exam;
