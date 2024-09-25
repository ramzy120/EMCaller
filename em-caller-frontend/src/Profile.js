// src/Profile.js
import React, { useEffect, useState } from 'react';
import { auth } from './firebase'; 
import './Profile.css'; 
import placeholderAvatar from './img/placeholder-avatar.png'; // Placeholder avatar image

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="profile-container">
      {user ? (
        <div className="profile-box">
          <img src={placeholderAvatar} alt="User Avatar" className="profile-avatar" />
          <h2>{user.displayName || "User Name"}</h2>
          <p>Email: {user.email}</p>
          <p>UID: {user.uid}</p>

          <div className="profile-buttons">
            <button className="edit-profile-btn">Edit Profile</button>
            <button className="logout-btn">Log Out</button>
          </div>
        </div>
      ) : (
        <h2>Please log in to view your profile.</h2>
      )}
    </div>
  );
};

export default Profile;
