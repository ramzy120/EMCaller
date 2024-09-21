// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import ForgotPassword from './ForgotPassword'; // Import the component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1></h1>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} /> {/* Add the new route */}
          <Route path="/" element={<h2>Home Page</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
