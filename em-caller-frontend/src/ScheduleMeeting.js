import React from 'react';
import './ScheduleMeeting.css';

const ScheduleMeeting = () => (
  <div className="schedule-container">
    <h2>Schedule a Meeting</h2>
    <form className="schedule-form">
      <label htmlFor="meeting-title">Meeting Title:</label>
      <input type="text" id="meeting-title" placeholder="Enter meeting title" required />

      <label htmlFor="meeting-date">Date and Time:</label>
      <input type="datetime-local" id="meeting-date" required />

      <button type="submit">Schedule Meeting</button>
    </form>
  </div>
);

export default ScheduleMeeting;
