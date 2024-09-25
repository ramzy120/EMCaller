import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { auth } from './firebase'; // Firebase import
import Signup from './Signup';
import Login from './Login';
import Profile from './Profile';
import Home from './Home';
import UserHome from './UserHome';
import ScheduleMeeting from './ScheduleMeeting'; // Import the ScheduleMeeting component
import JoinMeeting from './JoinMeeting'; // Import the JoinMeeting component
import Support from './Support'; // Import the Support component
import Navbar from './Navbar';
import Logout from './Logout';
import PrivateRoute from './PrivateRoute';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div className="App">
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={user ? <UserHome /> : <Home />} />
          <Route path="/profile" element={<PrivateRoute user={user}><Profile /></PrivateRoute>} />
          <Route path="/schedule" element={<PrivateRoute user={user}><ScheduleMeeting /></PrivateRoute>} />
          <Route path="/join" element={<PrivateRoute user={user}><JoinMeeting /></PrivateRoute>} />
          <Route path="/support" element={<PrivateRoute user={user}><Support /></PrivateRoute>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
