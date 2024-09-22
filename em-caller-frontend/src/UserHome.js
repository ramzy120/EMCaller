// src/UserHome.js
import React from 'react';
import './UserHome.css'; // Add CSS file for styling

const UserHome = () => {
  return (
    <div className="user-home-container">
      <header className="dashboard-header">
        <h1>Welcome Back to EM-Caller</h1>
        <p>Manage your meetings, stay connected, and collaborate effectively.</p>
      </header>

      <section className="dashboard-content">
        <h2>Your Dashboard</h2>
        <div className="dashboard-cards">
          <div className="dashboard-card">
            <h3>Upcoming Meetings</h3>
            <p>No upcoming meetings scheduled.</p>
            <button>Schedule New Meeting</button>
          </div>
          <div className="dashboard-card">
            <h3>Recent Calls</h3>
            <p>No recent calls available.</p>
            <button>View Call History</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserHome;
