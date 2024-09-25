// src/Logout.js
import React, { useEffect } from 'react';
import { auth } from './firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logoutUser = async () => {
      await signOut(auth);
      navigate('/login'); 
    };
    logoutUser();
  }, [navigate]);

  return <h2>Logging out...</h2>;
};

export default Logout;
