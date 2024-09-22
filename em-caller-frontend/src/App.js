// src/App.js
import React, { useEffect, useState } from 'react';
import { auth } from './firebase'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Profile from './Profile';
import Home from './Home';
import UserHome from './UserHome';
import Navbar from './Navbar';
import Header from './Header';
import Logout from './Logout';
import PrivateRoute from './PrivateRoute';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar user={user} />
        <Routes>
        <Route path="/" element={
          <PrivateRoute>
            <Home />
            <Header />
          </PrivateRoute>
        } />
        <Route path="/profile" element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        } />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Home />} />
          <Route path="/" element={user ? <UserHome /> : <Home />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
