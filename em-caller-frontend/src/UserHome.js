import React from 'react';
import './UserHome.css'; // Ensure the path is correct
import { useNavigate } from 'react-router-dom';

const UserHome = () => {
  const navigate = useNavigate();

  return (
    <div className="userhome-container">
      <header className="userhome-header">    
        <h1>Welcome to EM Caller</h1>
        <p>Experience seamless video conferencing with ease.</p>
      </header>

      <div className="userhome-content">
        <div className="userhome-card" onClick={() => navigate('/profile')}>
          <h2>Your Profile</h2>
          <p>Manage your personal details and preferences.</p>
        </div>
        <div className="userhome-card" onClick={() => navigate('/schedule')}>
          <h2>Schedule Meeting</h2>
          <p>Set up and schedule video meetings effortlessly.</p>
        </div>
        <div className="userhome-card" onClick={() => navigate('/meetings')}>
          <h2>Join a Meeting</h2>
          <p>Access your ongoing or scheduled meetings.</p>
        </div>
        <div className="userhome-card" onClick={() => navigate('/support')}>
          <h2>Support</h2>
          <p>Get help or contact support for any assistance.</p>
        </div>
      </div>

      <footer className="userhome-footer">
        <p>© {new Date().getFullYear()} EM Caller. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default UserHome;