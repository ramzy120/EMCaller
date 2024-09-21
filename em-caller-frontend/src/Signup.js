// src/Signup.js
import React, { useState } from 'react';
import { auth } from './firebase'; 
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './Signup.css'; // Import the Signup.css file
import logo from './img/emcallerlogo.png'; // Assuming logo is stored in this location

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dob, setDob] = useState('');
  const [sex, setSex] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/'); // Redirect to home after signup
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <img src={logo} alt="EM Caller Logo" className="header-logo" />
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            required
          />
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
          <input
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          <input
            type="date"
            placeholder="Date of Birth"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
          <select
            value={sex}
            onChange={(e) => setSex(e.target.value)}
            required
          >
            <option value="">Select Sex</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
        {error && <p className="error-message">{error}</p>}
        <div className="extra-links">
          <a href="/login">Already have an account? Login here</a>
        </div>
      </div>
    </div>
  );
};

export default Signup;