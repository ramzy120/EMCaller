// src/ForgotPassword.js
import React, { useState } from 'react';
import { auth } from './firebase';
import { sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './ForgotPassword.css';


const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Password reset email sent successfully.');
      setError('');
    } catch (err) {
      setError(err.message);
      setMessage('');
    }
  };

  const handleBackToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-box">
       <h2>Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="send-request-button">Send Request</button>
        </form>
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
        <div className="extra-links">
          <button onClick={handleBackToLogin} className="back-to-login-button">
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
