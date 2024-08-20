import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './TestSelection.css';

const TestSelection = () => {
  const [tests, setTests] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTests = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/tests'); // Adjust port if necessary
        setTests(response.data);
      } catch (error) {
        console.error('Error fetching tests:', error);
      }
    };

    fetchTests();
  }, []);

  const handleTestSelection = (testId) => {
    navigate(`/exam/${testId}`);
  };

  return (
    <div className="test-selection">
      <h2>Select a Test</h2>
      <div className="test-grid">
        {tests.length > 0 ? (
          tests.map((test) => (
            <div
              key={test._id}
              className="card"
              onClick={() => handleTestSelection(test._id)}
            >
              <p>{test.name}</p>
            </div>
          ))
        ) : (
          <p>No tests available</p>
        )}
      </div>
    </div>
  );
};

export default TestSelection;
