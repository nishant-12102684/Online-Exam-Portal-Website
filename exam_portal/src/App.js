// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Exam from './components/Exam';
import TestSelection from './components/Testselection';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/exam/:testId" element={<Exam />} />
          <Route path="/test-selection" element={<TestSelection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
