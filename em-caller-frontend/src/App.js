// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import './App.css';
import Home from './Home';  // Import the Home component

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Welcome to EM-Caller!</h1>
        {/* Define routes for the app */}
        <Routes>
          {/* Home Page Route */}
          <Route path="/" element={<Home />} />
          
          {/* Signup Page Route */}
          <Route path="/signup" element={<Signup />} />
          
          {/* Login Page Route */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
