import React, { useState } from 'react';
import './JoinMeeting.css';

const JoinMeeting = () => {
  const [meetingId, setMeetingId] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Simple validation
    if (!meetingId) {
      setError('Meeting ID is required');
      return;
    }

    // Logic to join the meeting
    console.log(`Joining meeting with ID: ${meetingId}`);
    // Reset the error state
    setError('');
    
    // Add your logic here to handle the meeting joining (API call, etc.)
  };

  return (
    <div className="join-meeting-container">
      <h2>Join a Meeting</h2>
      <form className="join-meeting-form" onSubmit={handleSubmit}>
        <label htmlFor="meeting-id">Meeting ID:</label>
        <input
          type="text"
          id="meeting-id"
          placeholder="Enter Meeting ID"
          value={meetingId}
          onChange={(e) => setMeetingId(e.target.value)}
          required
        />
        {error && <p className="error-message">{error}</p>} {/* Display error message */}
        <button type="submit">Join Meeting</button>
      </form>
    </div>
  );
};

export default JoinMeeting;
