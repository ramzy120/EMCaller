// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Welcome to EM-Caller!</h1>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<h2>Home Page</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
