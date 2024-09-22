// src/Profile.js
import React, { useEffect, useState } from 'react';
import { auth } from './firebase'; 
import './Profile.css';

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
        <div>
          <h2>User Profile</h2>
          <p>Email: {user.email}</p>
          <p>Display Name: {user.displayName || 'N/A'}</p>
          <p>UID: {user.uid}</p>
        </div>
      ) : (
        <h2>Please log in to view your profile.</h2>
      )}
    </div>
  );
};

export default Profile;
