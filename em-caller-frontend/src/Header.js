// src/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Style for header

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img src="/img/emcallerlogo.png" alt="EM Caller Logo" />
        </Link>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/logout">Logout</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
