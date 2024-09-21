// src/Login.js
import React, { useState } from 'react';
import { auth } from './firebase'; 
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import the Login.css file
import logo from './img/emcallerlogo.png'; // Assuming logo is stored in this location

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/'); // Redirect to home after login
    } catch (err) {
      if (err.code === 'auth/user-not-found') {
        setError('No user found with this email.');
      } else if (err.code === 'auth/wrong-password') {
        setError('Incorrect password. Please try again.');
      } else {
      setError(err.message);
    }
  }
};

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={logo} alt="EM Caller Logo" className="header-logo" />
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-button">Login</button>
        </form>
        {error && <p className="error-message">{error}</p>}
        <div className="extra-links">
          <a href="/forgot-password">Forgot Password?</a><br />
          <a href="/signup">New User? Click Here to Register</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
